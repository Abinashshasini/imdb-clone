'use client';
import { useState } from 'react';
import LatestMoviesCard from '../components/LatestMoviesCard';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import styles from '../styles/LatestMovies.module.css';

const LatestMovies = ({ data }) => {
  // * Required state for background image * //
  const [backgroundImage, setBackgroundImage] = useState(
    data[0]?.backdrop_path
  );

  // * Function to handleMouse over event on cadr * //
  const handleMouseOver = (_backdrop) => {
    setBackgroundImage(_backdrop);
  };

  return (
    <>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%), url(${
            IMAGE_BASE_URL + BACKDROP_SIZE + backgroundImage
          })`,
        }}
      >
        <h3 className={styles.heading}>Latest Movie Trailers</h3>
        <div className={styles.innerWrapper}>
          {data &&
            data.length > 0 &&
            data.map((element) => (
              <LatestMoviesCard
                id={element.id}
                description={element.overview}
                title={element.title}
                releaseDate={element.release_date}
                backdrop={element.backdrop_path}
                handleMouseOver={handleMouseOver}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default LatestMovies;
