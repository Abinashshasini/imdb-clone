import React, { useState } from 'react';
import Image from 'next/image';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import MaleSvg from '../assets/male.svg';
import FemaleSvg from '../assets/female.svg';
import styles from '../styles/CastCard.module.css';

const CastCard = ({ width, height, gender, id, src, name, character }) => {
  // * Required states for src * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + src
  );

  // * Function to handle image erro * //
  const handleImageError = () => {
    if (gender === 0) {
      setImagePath(MaleSvg);
    } else {
      setImagePath(FemaleSvg);
    }
  };

  return (
    <div className={styles.cardContainer} key={id} style={{ width }}>
      <div className={styles.imageContainer} style={{ width, height }}>
        <Image
          src={imagePath}
          alt="Picture of the author"
          fill
          onError={handleImageError}
        />
      </div>
      <div className={styles.textContainer}>
        <h3>{name}</h3>
        <p>{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
