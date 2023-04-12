'use client';
import { useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Image from 'next/image';
import MaleSvg from '../assets/male.svg';
import FemaleSvg from '../assets/female.svg';
import styles from '../styles/MovieHorizontalCard.module.css';

const NOT_FOUND_IMAGE =
  'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot/noposter.svg';

const MovieHorizontalCard = ({
  src = '',
  title = '',
  date = '',
  id,
  description = '',
  knownFor = {},
  mediaType = '',
  gender,
}) => {
  // * Required states for src * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + src
  );
  const [imageError, setImageError] = useState(false);

  // * Function to handle image erro * //
  const handleImageError = () => {
    if (mediaType === 'person') {
      setImageError(true);
      if (gender === 0) {
        setImagePath(MaleSvg);
      } else {
        setImagePath(FemaleSvg);
      }
    } else {
      setImagePath(NOT_FOUND_IMAGE);
    }
  };

  return (
    <div key={`${id}-${title}`} className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{
          backgroundImage: imageError ? 'none' : NOT_FOUND_IMAGE,
        }}
      >
        <Image
          src={imagePath}
          alt="Picture of the author"
          width={94}
          height={141}
          onError={handleImageError}
        />
      </div>
      <div className={styles.textContainer}>
        <h2>{title}</h2>
        <h3>{date}</h3>
        {mediaType === 'person' && <h3>{mediaType}</h3>}
        {description && <p>{description}</p>}
        {knownFor && knownFor.length > 0 && (
          <>
            <h4>Known For</h4>
            <div className={styles.knownForContainer}>
              {knownFor.slice(0, 2).map((element) => (
                <span key={element.id}>
                  {element.original_name || element.original_title}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieHorizontalCard;
