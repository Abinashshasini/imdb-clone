'use client';
import { useState } from 'react';
import TopRatedCard from '../components/TopRatedCard';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../config';
import styles from '../styles/TopRatedClientCmp.module.css';

const TopRatedClientCmp = ({ data }) => {
  // * Required state for background image * //
  const [backgroundImage, setBackgroundImage] = useState(data[0]?.backdrop_path)
  // * Function to handle Clik on Card * //
  const handelClickOnCard = () => { };
  
  // * Function to handleMouse over event on cadr * //
  const handleMouseOver = (_backdrop) => {
    setBackgroundImage(_backdrop)
   }
  
  return (
    <section className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.75) 0%, rgba(3,37,65, 0.75) 100%), url(${IMAGE_BASE_URL + BACKDROP_SIZE + backgroundImage})`,
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
                handleMouseOver={handleMouseOver}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedClientCmp;
