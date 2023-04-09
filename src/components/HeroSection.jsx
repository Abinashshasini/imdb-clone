import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Hero3 from '../assets/hero3.jpg';
import Hero4 from '../assets/hero4.jpg';
import Hero5 from '../assets/hero5.jpg';
import Hero6 from '../assets/hero6.jpg';
import HeroSearchBar from './HeroSearchBar';
import handleGenerateRandomNumber from '../utils';
import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  // * creating image array of object for random images * //
  const images = {
    1: Hero1.src,
    2: Hero2.src,
    3: Hero3.src,
    4: Hero4.src,
    5: Hero5.src,
    6: Hero6.src,
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
      <HeroSearchBar />
    </section>
  );
};

export default HeroSection;
