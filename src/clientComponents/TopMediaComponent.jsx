'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
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

const TopMediaComponent = ({ videos, backdrops }) => {
  // * Required states and refs * //
  const [selectedTab, setSelectedTab] = useState('Popular');
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerKey, setTrailerKey] = useState('');

  // * Function to play videos * //
  const handleClickOnVideo = (_key) => {
    setTrailerKey(_key);
    setShowTrailer(true);
  };

  // * If no video or backdrop available don't show anything * //
  if (videos?.length < 1 && backdrops?.length < 1) {
    return null;
  }

  return (
    <div className={styles.container}>
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
          trailerKey={trailerKey}
          setTrailerKey={setTrailerKey}
        />
      )}
    </div>
  );
};

export default TopMediaComponent;
