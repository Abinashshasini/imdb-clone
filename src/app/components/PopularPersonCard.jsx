import Image from 'next/image';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../config';
import styles from '../styles/PopularPersonCard.module.css';

const PopularPersonCard = ({ key, knownFor, department, title, photo }) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={IMAGE_BASE_URL + POSTER_SIZE + photo}
          alt="Picture of the author"
          width={150}
          height={100}
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
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPersonCard;
