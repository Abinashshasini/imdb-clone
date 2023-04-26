'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config';
import VideoPopup from '../components/VideoPopUp';
import styles from '../styles/TopMediaComponent.module.css';

const Tabs = [
  {
    id: 1029102,
    name: 'Popular',
  },
  {
    id: 1029102,
    name: 'Videos',
  },
  {
    id: 1092839,
    name: 'Backdrops',
  },
];

const TopMediaComponent = ({ videos, backdrops, title }) => {
  // * Required states and refs * //
  const [selectedTab, setSelectedTab] = useState('Popular');
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerDetails, setTrailerDetails] = useState({
    key: '',
    name: '',
  });

  // * Function to play videos * //
  const handleClickOnVideo = (_key) => {
    setTrailerDetails({
      key: _key,
      name: title,
    });
    setShowTrailer(true);
  };

  // * Select the backdrop tab if no videos available * //
  useEffect(() => {
    if (videos?.results.length < 1) {
      setSelectedTab('Backdrops');
    }
  }, []);

  // * If no video or backdrop available don't show anything * //
  if (videos?.results?.length < 1 && backdrops?.backdrops?.length < 1) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.headingContainer}>
        <h2>Top Media</h2>
        <div className={styles.tabsContainer}>
          {Tabs?.map((tab) => (
            <div
              className={`${styles.tabs} ${
                selectedTab === tab.name ? styles.activeTab : ''
              }`}
              key={tab.id}
              onClick={() => setSelectedTab(tab.name)}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
      <div className={styles.backdropCnt}>
        <div className={styles.wrapper}>
          {(() => {
            if (selectedTab === 'Popular') {
              return (
                <>
                  {videos?.results.length >= 1 &&
                    backdrops?.backdrops.length >= 1 && (
                      <>
                        <div
                          className={styles.youtubeContainer}
                          onClick={() =>
                            handleClickOnVideo(videos.results[0].key)
                          }
                        >
                          <Image
                            src={`https://img.youtube.com/vi/${videos.results[0].key}/mqdefault.jpg`}
                            alt="Youtube video thumbnail"
                            fill
                          />
                          <div className={styles.playIcnContainer}>
                            <BsFillPlayFill />
                          </div>
                        </div>
                        <div className={styles.backdropContainer}>
                          <Image
                            src={
                              IMAGE_BASE_URL +
                              BACKDROP_SIZE +
                              backdrops?.backdrops[0].file_path
                            }
                            alt="Backdrop path"
                            fill
                          />
                        </div>
                        <div className={styles.posterContainer}>
                          <Image
                            src={
                              IMAGE_BASE_URL +
                              POSTER_SIZE +
                              backdrops?.posters[0]?.file_path
                            }
                            alt="Poster image"
                            fill
                          />
                        </div>
                      </>
                    )}
                </>
              );
            }

            if (selectedTab === 'Videos') {
              return (
                <>
                  {videos?.results?.map((_video) => (
                    <div
                      className={styles.youtubeContainer}
                      onClick={() => handleClickOnVideo(_video.key)}
                    >
                      <Image
                        src={`https://img.youtube.com/vi/${_video.key}/mqdefault.jpg`}
                        alt="Youtube video thumbnail"
                        fill
                      />
                      <div className={styles.playIcnContainer}>
                        <BsFillPlayFill />
                      </div>
                    </div>
                  ))}
                </>
              );
            }

            if (selectedTab === 'Backdrops') {
              return (
                <>
                  {backdrops?.backdrops.length > 0 &&
                    backdrops.backdrops.map((backdrop, index) => {
                      if (index <= 10) {
                        return (
                          <div className={styles.backdropContainer}>
                            <Image
                              src={
                                IMAGE_BASE_URL +
                                BACKDROP_SIZE +
                                backdrop.file_path
                              }
                              alt="Backdrop path"
                              fill
                            />
                          </div>
                        );
                      }
                    })}
                </>
              );
            }

            return null;
          })()}
        </div>
      </div>
      {showTrailer && (
        <VideoPopup
          setShowTrailer={setShowTrailer}
          trailerDetails={trailerDetails}
          setTrailerDetails={setTrailerDetails}
        />
      )}
    </section>
  );
};

export default TopMediaComponent;
