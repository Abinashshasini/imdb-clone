'use client';
import { useState, useEffect } from 'react';
import API from '../api';
import MovieCard from '../components/MovieCard';
import SectionHeader from '../components/SectionHeader';
import styles from '../styles/SectionClientCmp.module.css';

const PopularClientCmp = ({ data }) => {
  // * Required states * //
  const [selectdCategory, setSelectedCategory] = useState('today');

  // * options for trending movie section * //
  const options = [
    {
      id: 1,
      name: 'Movies',
      category: 'movie',
    },
    {
      id: 2,
      name: 'TV Shows',
      category: 'tv',
    },
    {
      id: 3,
      name: 'Persons',
      category: 'person',
    },
  ];

  return (
    <div>
      <SectionHeader
        title="What's Popular"
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

export default PopularClientCmp;
