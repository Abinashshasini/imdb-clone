'use client';
import TopRatedCard from '../components/TopRatedCard';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import handleGenerateRandomNumber from '../utils';
import styles from '../styles/TopRatedClientCmp.module.css';

const TopRatedClientCmp = ({ data }) => {
  // * Function to handle Clik on Card * //
  const handelClickOnCard = () => {};

  return (
    <section className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%), url(${
            data && data.length > 0
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data[handleGenerateRandomNumber(1, 20)]?.backdrop_path
              : ''
          })`,
        }}
      >
        <h3 className={styles.heading}>Top Rated Movies of All Time</h3>
        <div className={styles.innerWrapper}>
          {data &&
            data.length > 0 &&
            data.map((element) => (
              <TopRatedCard
                key={element.id}
                description={element.overview}
                title={element.title}
                releaseDate={element.release_date}
                backdrop={element.backdrop_path}
                handelClickOnCard={handelClickOnCard}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedClientCmp;
