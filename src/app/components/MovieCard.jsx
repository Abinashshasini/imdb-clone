/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({
  src = '',
  title = '',
  date = '',
  percentage = '',
  key,
}) => {
  // * Required states and refs * //
  const circleAnimationRef = useRef(null);

  // * Effect to calculate the total length of circle * //
  useEffect(() => {
    const length = circleAnimationRef.current.getTotalLength();
    const _percentage = Math.floor((Number(percentage) * 100) / 10);
    circleAnimationRef.current.style.strokeDashoffset = 0;
    circleAnimationRef.current.style.strokeDasharray =
      (_percentage / 100) * 100;
  }, []);

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image
          src={IMAGE_BASE_URL + POSTER_SIZE + src}
          alt="Picture of the author"
          width={150}
          height={100}
        />
        <div className={styles.threeDots}>
          <BsThreeDots />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.percentageContainer}>
          {percentage && (
            <div className={styles.percentage}>
              {Math.floor((Number(percentage) * 100) / 10)}%
            </div>
          )}
          <svg width="40" height="40">
            <circle className={styles.circle1} cx="17" cy="20" r="15"></circle>
            <circle
              className={styles.circle2}
              cx="17"
              cy="20"
              r="15"
              ref={circleAnimationRef}
            ></circle>
          </svg>
        </div>
        <h3>{title}</h3>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
