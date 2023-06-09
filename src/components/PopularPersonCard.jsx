import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';
import styles from '../styles/PopularPersonCard.module.css';

const PopularPersonCard = ({ key, knownFor, department, title, photo }) => {
  // * Required states for src * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + photo
  );
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={imagePath}
          alt="Picture of the author"
          width={150}
          height={225}
          onError={() =>
            setImagePath(
              'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/prot/noposter.svg'
            )
          }
        />
        <div className={styles.departmentCnt}>
          <p className={styles.department}>{department}</p>
        </div>
      </div>
      <div className={styles.knownContainer}>
        <h4 className={styles.title}>{title}</h4>
        <h5 className={styles.description}> Know for</h5>
        <div className={styles.knownForCont}>
          {knownFor &&
            knownFor.slice(0, 11).map((elemnet) => (
              <Link
                href={`/${elemnet.media_type}-${elemnet.id}/${
                  elemnet.title?.split(' ').join('-') ||
                  elemnet.original_name?.split(' ').join('-')
                } `}
              >
                <div
                  key={elemnet.id}
                  className={styles.knownForCard}
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(0,0,0, 0.5) 0%, rgba(0,0,0, 0.5) 100%) ,url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${elemnet.backdrop_path})`,
                  }}
                >
                  <div className={styles.textContainer}>
                    <h5>{elemnet.title || elemnet.original_name}</h5>
                    <p>{elemnet.release_date || elemnet.first_air_date}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPersonCard;
