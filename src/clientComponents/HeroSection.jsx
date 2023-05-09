import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Hero3 from '../assets/hero3.jpg';
import Hero4 from '../assets/hero4.jpg';
import Hero5 from '../assets/hero5.jpg';
import Hero6 from '../assets/hero6.jpg';
import Hero7 from '../assets/hero7.jpg';
import Hero8 from '../assets/hero8.jpeg';
import SearchBar from '../components/SearchBar';
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
    7: Hero7.src,
    8: Hero8.src,
  };

  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url(${
          images[handleGenerateRandomNumber(1, 8)] || Hero5.src
        })`,
      }}
    >
      <div className={styles.textWrapper}>
        <h1>Welcome.</h1>
        <h3>
          Millions of movies, TV shows and people to discover. Explore now.
        </h3>
      </div>
      <SearchBar page="home" />
    </section>
  );
};

export default HeroSection;
