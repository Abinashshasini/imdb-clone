'use client';
import { useState } from 'react';
import Image from 'next/image';
import { handleCalculateTime } from '../utils';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import MediaPlay from '../components/MediaPlay';
import CastClientCmp from '../clientComponents/CastClientCmp';
import TopMediaComponent from './TopMediaComponent';
import MovieReviewsComponent from './MediaReviewsClientCmp';
import SimilarMediaComponent from './SimilarMediaClientCmp';
import NoMediaImage from '../assets/movie.svg';
import styles from '../styles/DetailsPage.module.css';

const DetailsClientCmp = ({ data, creditsData }) => {
  // * Destructuring Data * //
  const {
    backdrop_path = '',
    title = '',
    name = '',
    poster_path = '',
    release_date = '',
    first_air_date = '',
    production_countries = [],
    genres = [],
    vote_average = '',
    runtime = 0,
    tagline = '',
    overview = '',
    videos = {},
    images = {},
  } = data;

  // * Required states for image error * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + poster_path
  );

  // * Getting the names of important persons * //
  const { cast = [], crew = [] } = creditsData;
  const mediaCrew = crew?.filter(
    (element) =>
      element.job === 'Director' ||
      element.job === 'Writer' ||
      element.job === 'Novel' ||
      element.job === 'Visual Effects' ||
      element.job === 'Executive Producer'
  );

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
              src={imagePath}
              alt="Picture of the author"
              fill
              onError={() => setImagePath(NoMediaImage)}
            />
          </div>
          <div className={styles.textContainer}>
            <div>
              <h2 className={styles.title}>
                {title || name}{' '}
                <span className={styles.tag_release_date}>
                  {(() => {
                    if (release_date || first_air_date) {
                      return (
                        <span>
                          (
                          {release_date.split('-')[0] ||
                            first_air_date.split('-')[0]}
                          )
                        </span>
                      );
                    }
                  })()}
                </span>
              </h2>
              <div className={styles.flexContainer}>
                <div className="flex">
                  <div className={styles.certification}>UA</div>
                  <div className={styles.release}>
                    {release_date || first_air_date}{' '}
                    {production_countries[0]?.iso_3166_1 &&
                      `(${production_countries[0]?.iso_3166_1})`}
                  </div>
                </div>
                <div className={styles.genres}>
                  {genres?.map((genre) => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
                {runtime ? (
                  <div className={styles.runtime}>
                    {handleCalculateTime(runtime)}
                  </div>
                ) : null}
              </div>
            </div>
            <MediaPlay percentage={vote_average} />
            <div className={styles.overViwContainer}>
              <div className={styles.tagline}>{tagline}</div>
              <div className={styles.overview}>
                <h3>Overview</h3>
                <p>{overview}</p>
              </div>
            </div>
            <div className={styles.crewContainer}>
              {mediaCrew?.length > 0 &&
                mediaCrew.slice(0, 5).map((_crew) => (
                  <div key={_crew.credit_id} className={styles.crewWrapper}>
                    <h4>{_crew.name}</h4>
                    <p>{_crew.known_for_department}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sectionTwoContainer}>
        <CastClientCmp cast={cast} crew={crew} />
        <TopMediaComponent videos={videos} backdrops={images} />
        <MovieReviewsComponent />
        <SimilarMediaComponent />
      </section>
    </>
  );
};

export default DetailsClientCmp;
