'use client';
import styles from '../styles/Footer.module.css';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  // * Function to naviagte the user to my link's * //
  const handleNavigateToSocilaMedia = (_media) => {
    let link = '';
    if (_media === 'fb') {
      link = 'https://www.facebook.com/abinash.shasini';
    } else if (_media === 'tw') {
      link = 'https://twitter.com/ShasiniAbinash';
    } else if (_media === 'git') {
      link = 'https://github.com/Abinashshasini';
    } else {
      link = 'https://www.linkedin.com/in/abinash-shasini';
    }
    window.open(link);
  };

  return (
    <footer className={styles.container}>
      <div className={styles.headContainer}>
        <h2>Terms of use</h2>
        <h2>About</h2>
        <h2>Blog</h2>
        <h2>Privacy policy</h2>
      </div>
      <div className={styles.aboutContainer}>
        <p>
          The Movie Database (TMDB) is a community built movie and TV database.
          Every piece of data has been added by our amazing community dating
          back to 2008. TMDB's strong international focus and breadth of data is
          largely unmatched and something we're incredibly proud of. Put simply,
          we live and breathe community and that's precisely what makes us
          different.
        </p>
      </div>
      <div className={styles.iconContainer}>
        <FaFacebookSquare onClick={() => handleNavigateToSocilaMedia('fb')} />
        <FaGithubSquare onClick={() => handleNavigateToSocilaMedia('git')} />
        <FaTwitter onClick={() => handleNavigateToSocilaMedia('tw')} />
        <FaLinkedin onClick={() => handleNavigateToSocilaMedia('ld')} />
      </div>
    </footer>
  );
};

export default Footer;
