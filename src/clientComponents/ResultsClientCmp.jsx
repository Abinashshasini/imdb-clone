'use client';
import { useState, useRef, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import MovieHorizontalCard from '../components/MovieHorizontalCard';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import Loader from '../skeleton/Loader';
import styles from '../styles/Results.module.css';
import API from '../api';

const ResultsClientCmp = ({ data: dataFromServer, type }) => {
  // * Required states and refs * //
  const [data, setData] = useState(dataFromServer);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const loadMoreRef = useRef(null);
  const { isIntersecting = false } = useInfiniteScroll(loadMoreRef, {
    threshold: 0,
    root: null,
    rootMargin: '400px',
  });

  // * Function to fetch data * //
  const handleFetchData = async () => {
    setLoading(true);
    try {
      const response = await API.fetchWhatsPopular(type, page);
      setLoading(false);
      if (response && response.results && response.results.length > 0) {
        setData([...data, ...response.results]);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        'Something occure while fetching popular movie response',
        error
      );
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
    if (isIntersecting) {
      handleFetchData();
    }
  }, [page]);

  return (
    <div className={styles.container}>
      <h1>{type === 'tv' ? 'Popular TV Shows' : 'Popular Movies'}</h1>
      <div className={styles.wrapperGrid}>
        {data &&
          data.length > 0 &&
          data.map((element) => (
            <MovieCard
              type="large"
              id={element.id}
              src={element.poster_path}
              title={element.title || element.name}
              date={element.release_date || element.first_air_date}
              percentage={element.vote_average}
            />
          ))}
      </div>
      <div className={styles.wrapperFlex}>
        {data &&
          data.length > 0 &&
          data.map((element) => (
            <MovieHorizontalCard
              key={element.id}
              src={element.poster_path}
              title={element.title || element.name}
              date={element.release_date || element.first_air_date}
              description={element.overview}
            />
          ))}
      </div>
      <div data-observe={true} ref={loadMoreRef}>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default ResultsClientCmp;
