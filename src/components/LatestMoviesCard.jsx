'use client';
import Image from 'next/image';
import { useState } from 'react';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import API from '../api';
import styles from '../styles/LatestMovies.module.css';

const LatestMoviesCard = ({
  id = '',
  title = '',
  description = '',
  backdrop = '',
  releaseDate = '',
  handleMouseOver,
}) => {
  const [trailerKey, setTrailerKey] = useState('');

  // * Function to handle Clik on Card * //
  const handelClickOnCard = async () => {
    try {
      const response = await API.fetchMovieOrTvDetails('movie', id);
      if (response?.videos?.results.length > 0) {
        const officialTrailer = response.videos.results.filter(
          (video) => video.name === 'Official Trailer'
        );
        setTrailerKey(officialTrailer.key);
      }
    } catch (error) {
      console.error(
        `Something went wrong while fething movie vide data ${error}`
      );
    }
  };

  return (
    <div key={id} className={styles.cardContainer} onClick={handelClickOnCard}>
      <div className={styles.cardImageContaiiner}>
        <Image
          src={IMAGE_BASE_URL + POSTER_SIZE + backdrop}
          alt="Picture of the author"
          width={300}
          height={168}
          onMouseOver={() => handleMouseOver(backdrop)}
        />
        <div className={styles.payBtnContainer}>
          <BsFillPlayFill />
        </div>
        <div className={styles.threeDotContainer}>
          <BsThreeDots />
        </div>
      </div>
      <div className={styles.cardTextContainer}>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p>{releaseDate}</p>
      </div>
    </div>
  );
};

export default LatestMoviesCard;
