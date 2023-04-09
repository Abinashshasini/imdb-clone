'use client';
import MovieCard from '@/components/MovieCard';
import CardBigSkeleton from '@/skeleton/CardBigSkeleton';
import { useState } from 'react';
import styles from '../styles/Results.module.css';

const ResultsClientCmp = ({ data: dataFromServer, type }) => {
  const [data, setData] = useState(dataFromServer);

  return (
    <div className={styles.container}>
      <h1>Popular Movies</h1>
      <div className={styles.wrapper}>
        {data &&
          data.length > 0 &&
          data.map((element) => (
            <MovieCard
              type="large"
              key={element.id}
              src={element.poster_path}
              title={element.title || element.name}
              date={element.release_date || element.first_air_date}
              percentage={element.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default ResultsClientCmp;
