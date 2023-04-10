/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { useEffect, useRef, useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Image from 'next/image';
import useInfiniteScroll from '../hooks/useInfiniteScroll';
import styles from '../styles/MovieCard.module.css';

const MovieCard = ({
  src = '',
  title = '',
  date = '',
  percentage = '',
  key,
  type,
}) => {
  // * Required states and refs * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + src
  );
  const componentRef = useRef(null);
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);

  // * Ref to find the component is in dom or not * //
  const { isIntersecting: isVisible } = useInfiniteScroll(componentRef, {});

  // * Effect to calculate the total length of circle if content is available on DOM * //
  useEffect(() => {
    if (isVisible) {
      const length = circleTwoRef.current.getTotalLength();
      const _percentage = Math.floor((Number(percentage) * 100) / 10);
      circleTwoRef.current.style.strokeDasharray = length;

      // circle color code
      if (_percentage <= 20) {
        circleOneRef.current.style.stroke = '#d40242';
        circleTwoRef.current.style.stroke = '#d40242';
      } else if (_percentage > 20 && _percentage <= 60) {
        circleOneRef.current.style.stroke = '#d29001';
        circleTwoRef.current.style.stroke = '#d29001';
      } else {
        circleOneRef.current.style.stroke = '#00e55b';
        circleTwoRef.current.style.stroke = '#00e55b';
      }

      // circle fill percentage code
      if (percentage !== 0) {
        circleTwoRef.current.style.strokeDashoffset =
          100 - (_percentage / 100) * 100;
      } else {
        circleTwoRef.current.style.strokeDashoffset = length;
      }
    }
  }, [isVisible]);

  return (
    <div
      className={type === 'small' ? styles.containerSmall : styles.containerBig}
      key={`${key}-${title}`}
      ref={componentRef}
    >
      <div
        className={
          type === 'small' ? styles.imgContainerSmall : styles.imgContainerBig
        }
      >
        <Image
          src={imagePath}
          alt="Picture of the author"
          width={type === 'small' ? 150 : 180}
          height={225}
          onError={() =>
            setImagePath(
              'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot/noposter.svg'
            )
          }
        />
        <div className={styles.threeDots}>
          <BsThreeDots />
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.percentageContainer}>
          <div className={styles.percentage}>
            {percentage ? Math.floor((Number(percentage) * 100) / 10) : 0}%
          </div>
          <svg width="40" height="40">
            <circle
              className={styles.circle1}
              cx="17"
              cy="20"
              r="15"
              ref={circleOneRef}
            ></circle>
            <circle
              className={styles.circle2}
              cx="17"
              cy="20"
              r="15"
              ref={circleTwoRef}
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
