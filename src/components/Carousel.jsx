'use client';
import { useEffect, useState } from 'react';
import CarouselHeader from '../components/CarouselHeader';
import MovieCard from '../components/MovieCard';
import CardSkeleton from '../skeleton/CardSkeleton';
import API from '../api';
import styles from '../styles/Carousel.module.css';

const Carousel = ({ data: dataFromServer, options, title, apiParams }) => {
  // * Required states * //
  const [data, setData] = useState(dataFromServer);
  const [selectdCategory, setSelectedCategory] = useState();
  const [loading, setLoading] = useState(false);
  const { type, category, page } = apiParams;

  // * Function to fetch data * //
  const handleFetchTrendingData = async (_selectd) => {
    let params = {};
    if (type === 'trending') {
      params = { type, category, page, timing: _selectd };
    } else {
      params = {
        type: _selectd,
        category,
        page,
      };
    }
    try {
      setLoading(true);
      const results = await API.fetchCarouselData(params);
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
    <>
      <CarouselHeader
        title={title}
        options={options}
        handleGetSelectedTab={(_params) => setSelectedCategory(_params)}
      />
      <div className={styles.shadowContainer}>
        <div className={styles.wrapper}>
          {!loading && data && data.length > 0
            ? data.map((element) => (
                <MovieCard
                  type="small"
                  resultType={
                    element.media_type || (element.title ? 'movie' : 'tv')
                  }
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
    </>
  );
};

export default Carousel;
