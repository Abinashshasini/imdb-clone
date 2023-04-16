'use client';

import { useState } from 'react';
import Image from 'next/image';
import { BsFillPlayFill } from 'react-icons/bs';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import styles from '../styles/MediaClientCmp.module.css';

const Tabs = [
  {
    id: 1029102,
    name: 'Videos',
  },
  {
    id: 1092839,
    name: 'Backdrops',
  },
];

const MediaClientCmp = ({ videos, images }) => {
  // * Required states and refs * //\
  const [selectedTab, setSelectedTab] = useState('Videos');

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
            if (selectedTab === 'Videos') {
              return (
                <>
                  {videos?.results?.map((video) => (
                    <div className={styles.youtubeContainer}>
                      <Image
                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
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
                  {images?.backdrops.length > 0 &&
                    images.backdrops.map((backdrop, index) => {
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
    </div>
  );
};

export default MediaClientCmp;
