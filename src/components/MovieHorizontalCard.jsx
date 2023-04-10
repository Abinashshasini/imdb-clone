'use client';
import { useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import Image from 'next/image';
import styles from '../styles/MovieHorizontalCard.module.css';

const MovieHorizontalCard = ({
  src = '',
  title = '',
  date = '',
  id,
  description = '',
  knownFor = {},
  mediaType = '',
}) => {
  // * Required states for src * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + src
  );
  return (
    <div key={`${id}-${title}`} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt="Picture of the author"
          width={94}
          height={141}
          onError={() =>
            setImagePath(
              'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot/noposter.svg'
            )
          }
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
              {knownFor.map((element) => (
                <span>{element.original_title}</span>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MovieHorizontalCard;
