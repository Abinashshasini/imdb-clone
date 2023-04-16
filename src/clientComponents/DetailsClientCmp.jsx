'use client';
import Image from 'next/image';
import { handleCalculateTime } from '../utils';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import styles from '../styles/DetailsPage.module.css';

const DetailsClientCmp = ({ data }) => {
  console.log('data from server ', data);
  // * Destructuring Data * //
  const {
    backdrop_path = '',
    original_title = '',
    poster_path = '',
    release_date = '',
    production_countries = [],
    genres = [],
    runtime = 0,
    tagline = '',
    overview = '',
  } = data;
  return (
    <>
      <section className={styles.container}>
        <div
          className={styles.backgroundWrp}
          style={{
            backgroundImage: `url(${
              IMAGE_BASE_URL + BACKDROP_SIZE + backdrop_path
            })`,
          }}
        />
        <div className={styles.wrapper}>
          <div className={styles.imgContainer}>
            <Image
              src={IMAGE_BASE_URL + POSTER_SIZE + poster_path}
              alt="Picture of the author"
              fill
            />
          </div>
          <div className={styles.textContainer}>
            <div>
              <h2 className={styles.title}>
                {original_title}{' '}
                <span className={styles.tag_release_date}>
                  ({release_date.split('-')[0]})
                </span>
              </h2>
              <div className={styles.flexContainer}>
                <div className={styles.certification}>UA</div>
                <div className={styles.release}>
                  {release_date} ({production_countries[0].iso_3166_1})
                </div>
                <div className={styles.genres}>
                  {genres?.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
                <div className={styles.runtime}>
                  {handleCalculateTime(runtime)}
                </div>
              </div>
            </div>
            <div className={styles.tagline}>{tagline}</div>
            <div className={styles.overview}>
              <h3>Overview</h3>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsClientCmp;
