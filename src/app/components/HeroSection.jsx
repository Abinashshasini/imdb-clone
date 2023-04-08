'use client';
import { useRef } from 'react';
import styles from '../styles/HeroSection.module.css';
import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Hero3 from '../assets/hero3.jpg';
import Hero4 from '../assets/hero4.jpg';
import Hero5 from '../assets/hero5.jpg';
import Hero6 from '../assets/hero6.jpg';

const HeroSection = () => {
  // * Required States * //
  const searchText = useRef('');
  // * Functoion to generate random number between 2 ranges * //
  const handleGenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // * creating image array of object for random images * //
  const images = {
    1: Hero1.src,
    2: Hero2.src,
    3: Hero3.src,
    4: Hero4.src,
    5: Hero5.src,
    6: Hero6.src,
  };

  // * Function to handle search functionalaty * //
  const handleSearch = (event) => {
    searchText.current = event.target.value;
  };

  return (
    <section
      className={`${styles.container} max-w-8xl sm:mx-auto`}
      style={{
        backgroundImage: `url(${
          images[handleGenerateRandomNumber(1, 6)] || Hero5.src
        })`,
      }}
    >
      <div className={styles.textWrapper}>
        <h1>Welcome.</h1>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <div className={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for a movie, tv show, person...."
          ref={searchText}
          onChange={handleSearch}
          autoComplete="off"
        />
        <button>Search</button>
      </div>
    </section>
  );
};

export default HeroSection;
