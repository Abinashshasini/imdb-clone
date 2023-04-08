'use client';
import { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import MovieCard from '../components/MovieCard';
import API from '../api';
import styles from '../styles/SectionClientCmp.module.css';

const TrendingClientCmp = ({ data }) => {
  // * Required states * //
  const [selectdCategory, setSelectedCategory] = useState('today');

  // * options for trending movie section * //
  const options = [
    {
      id: 1,
      name: 'Today',
      category: 'today',
    },
    {
      id: 2,
      name: 'This Week',
      category: 'week',
    },
  ];

  return (
    <div>
      <SectionHeader
        title="Trending Movies"
        options={options}
        handleGetSelectedTab={(_params) => setSelectedCategory(_params)}
      />
      <div className={styles.container}>
        {data &&
          data.length > 0 &&
          data.map((element) => (
            <MovieCard
              key={element.id}
              src={element.poster_path}
              title={element.title}
              date={element.release_date}
              percentage={element.vote_average}
            />
          ))}
      </div>
    </div>
  );
};

export default TrendingClientCmp;
