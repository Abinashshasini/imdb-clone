'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import API from '../api';
import MovieCard from '../components/MovieCard';
import CardSkeleton from '../skeleton/CardSkeleton';
import styles from '../styles/SectionClientCmp.module.css';

const SimilarMoviesComponent = ({ data: dataFromServer }) => {
  const { mediaid } = useParams();
  // * Getting the movie id from props * //
  const mediaID = mediaid.split('-')[1];
  const mediaType = mediaid.split('-')[0];

  // * Required states * //
  const [data, setData] = useState(dataFromServer);
  const [loading, setLoading] = useState(false);

  // * Function to fetch similar movie data data * //
  const handleFetchSimilarMoviesData = async (type) => {
    try {
      setLoading(true);
      const results = await API.fetchMovieOrTvSimilar(mediaType, mediaID);
      if (results) {
        setLoading(false);
        setData(results.results);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // * Effect to fetch data on landing * //
  useEffect(() => {
    handleFetchSimilarMoviesData();
  }, []);

  return (
    <section className={styles.similarContainer}>
      <h2>
        Similar {mediaType === 'movie' ? mediaType : `${mediaType + 'Shows'}`}
      </h2>
      <div className={styles.shadowContainer}>
        <div className={styles.wrapper}>
          {!loading && data && data.length > 0
            ? data.map((element) => (
                <MovieCard
                  type="small"
                  resultType={mediaType}
                  id={element.id}
                  src={element.poster_path}
                  title={element.title || element.name}
                  date={element.release_date || element.first_air_date}
                  percentage={element.vote_average}
                />
              ))
            : new Array(10).fill(1).map((_) => <CardSkeleton />)}
        </div>
      </div>
    </section>
  );
};

export default SimilarMoviesComponent;
