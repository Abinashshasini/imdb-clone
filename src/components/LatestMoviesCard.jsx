'use client';
import Image from 'next/image';
import { BsThreeDots, BsFillPlayFill } from 'react-icons/bs';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import styles from '../styles/LatestMovies.module.css';

const LatestMoviesCard = ({
  key = '',
  title = '',
  description = '',
  backdrop = '',
  releaseDate = '',
  handelClickOnCard,
  handleMouseOver,
}) => {
  return (
    <div key={key} className={styles.cardContainer} onClick={handelClickOnCard}>
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
