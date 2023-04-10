'use client';
import { useState, useRef, useEffect } from 'react';
import { useParams } from 'next/navigation';
import MovieHorizontalCard from '../components/MovieHorizontalCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loader from '../skeleton/Loader';
import API from '../api';

const SearchResultsClientCmp = ({ data: dataFromServer }) => {
  console.log('dataFromServer: ', dataFromServer);
  const { searchTerm } = useParams();
  // * Required states and refs * //
  const [data, setData] = useState(dataFromServer);
  const [page, setPage] = useState(1);
  const [isDataAvailable, setIsDataAvailable] = useState(true);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);

  // * Hook for infinite scroll * //
  const { isIntersecting = false } = useInfiniteScroll(loadMoreRef, {
    threshold: 0,
    root: null,
    rootMargin: '400px',
  });

  // * Function to fetch data * //
  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await API.fetchSearchResults(searchTerm, page);
      setLoading(false);
      if (response && response.results && response.results.length > 0) {
        setData([...data, ...response.results]);
      } else {
        setIsDataAvailable(false);
      }
    } catch (error) {
      setLoading(false);
      console.error('Something occure while fetching search response', error);
    }
  };

  // * Effect for page increment on intersection * //
  useEffect(() => {
    if (isIntersecting) {
      setPage(page + 1);
    }
  }, [isIntersecting]);

  // * Effect to call API when page changes * //
  useEffect(() => {
    if (isIntersecting && isDataAvailable) {
      handleFetchData();
    }
  }, [page]);

  // * If no data available * //
  if (data.length === 0) {
    return (
      <div>
        <p>No data found</p>
      </div>
    );
  }

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((element) => (
          <MovieHorizontalCard
            id={element.id}
            src={element.poster_path || element.profile_path}
            title={element.title || element.name || ''}
            date={element.release_date || element.first_air_date || ''}
            description={element.overview || ''}
            knownFor={element.known_for}
            mediaType={element.media_type || ''}
          />
        ))}
      <div data-observe={true} ref={loadMoreRef}>
        {loading && <Loader />}
      </div>
    </>
  );
};

export default SearchResultsClientCmp;
