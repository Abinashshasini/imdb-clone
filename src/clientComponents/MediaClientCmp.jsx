'use client';

import { useState } from 'react';
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
  {
    id: 1023476,
    name: 'Posters',
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
          {/* {data?.map((element) => (
            <div className={styles.cardContainer}>
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
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default MediaClientCmp;
