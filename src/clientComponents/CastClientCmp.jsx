import { useState } from 'react';
import Image from 'next/image';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import MaleSvg from '../assets/male.svg';
import FemaleSvg from '../assets/female.svg';
import styles from '../styles/CastClientCmp.module.css';

const CastImageCmp = ({ src, gender }) => {
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
    <Image
      src={imagePath}
      alt="Picture of the author"
      fill
      onError={handleImageError}
    />
  );
};

const CastClientCmp = ({ cast, crew }) => {
  return (
    <section className={styles.container}>
      <h2>Top Billed Cast</h2>
      <div className={styles.backdropCnt}>
        <div className={styles.wrapper}>
          {cast?.map((element, index) => (
            <div
              className={styles.cardContainer}
              key={element.id + '-' + index}
            >
              <div className={styles.imageContainer}>
                <CastImageCmp
                  src={element.profile_path}
                  gender={element.gender}
                />
              </div>
              <div className={styles.textContainer}>
                <h3>{element.name}</h3>
                <p>{element.character}</p>
              </div>
            </div>
          ))}
          {cast?.length <= 3 &&
            crew?.map((element, index) => (
              <div
                className={styles.cardContainer}
                key={element.id + '-' + index}
              >
                <div className={styles.imageContainer}>
                  <CastImageCmp
                    src={element.profile_path}
                    gender={element.gender}
                  />
                </div>
                <div className={styles.textContainer}>
                  <h3>{element.name}</h3>
                  <p>{element.job}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CastClientCmp;
