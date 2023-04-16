'use client';
import { useState, useEffect } from 'react';
import API from '../api';
import MovieCard from '../components/MovieCard';
import SectionHeader from '../components/SectionHeader';
import CardSkeleton from '../skeleton/CardSkeleton';
import styles from '../styles/SectionClientCmp.module.css';

const PopularClientCmp = ({ data: dataFromServer }) => {
  // * Required states * //
  const [data, setData] = useState(dataFromServer);
  const [selectdCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);

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
  ];

  // * Function to fetch data * //
  const handleFetchPopularData = async (type) => {
    try {
      setLoading(true);
      const results = await API.fetchWhatsPopular(type, 1);
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
    if (selectdCategory) handleFetchPopularData(selectdCategory);
  }, [selectdCategory]);

  return (
    <section className={styles.container}>
      <SectionHeader
        title="What's Popular"
        options={options}
        handleGetSelectedTab={(_params) => setSelectedCategory(_params)}
      />
      <div className={styles.shadowContainer}>
        <div className={styles.wrapper}>
          {!loading && data && data.length > 0
            ? data.map((element) => (
                <MovieCard
                  type="small"
                  id={element.id}
                  resultType={element.title ? 'movie' : 'tv'}
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

export default PopularClientCmp;
