'use client';
import { useEffect, useState } from 'react';
import API from '../api';
import SectionHeader from '../components/SectionHeader';
import MovieCard from '../components/MovieCard';
import MovieCardSkeleton from '../components/MovieCardSkeleton';
import styles from '../styles/SectionClientCmp.module.css';

const TrendingClientCmp = ({ data: dataFromServer }) => {
  // * Required states * //
  const [data, setData] = useState(dataFromServer);
  const [selectdCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);

  // * options for trending movie section * //
  const options = [
    {
      id: 1,
      name: 'Today',
      category: 'day',
    },
    {
      id: 2,
      name: 'This Week',
      category: 'week',
    },
  ];

  // * Function to fetch data * //
  const handleFetchTrendingData = async (type) => {
    try {
      setLoading(true);
      const results = await API.fetchTrendingMovies(type);
      if (results) {
        setLoading(false);
        setData(results.results);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  // * Effect to fetch data when user changes category * //
  useEffect(() => {
    if (selectdCategory) handleFetchTrendingData(selectdCategory);
  }, [selectdCategory]);

  return (
    <div>
      <SectionHeader
        title="Trending"
        options={options}
        handleGetSelectedTab={(_params) => setSelectedCategory(_params)}
      />
      <div className={styles.container}>
        {!loading && data && data.length > 0 ? (
          data.map((element) => (
            <MovieCard
              key={element.id}
              src={element.poster_path}
              title={element.title || element.name}
              date={element.release_date || element.first_air_date}
              percentage={element.vote_average}
            />
          ))
        ) : (
          <MovieCardSkeleton />
        )}
      </div>
    </div>
  );
};

export default TrendingClientCmp;
