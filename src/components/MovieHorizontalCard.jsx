'use client';
import { IMAGE_BASE_URL, POSTER_SIZE } from '@/config';
import Image from 'next/image';
import styles from '@/styles/MovieHorizontalCard.module.css';

const MovieHorizontalCard = ({
  src = '',
  title = '',
  date = '',
  key,
  description = '',
}) => {
  return (
    <div key={`${key}-${title}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={IMAGE_BASE_URL + POSTER_SIZE + src}
          alt="Picture of the author"
          width={94}
          height={141}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default MovieHorizontalCard;
