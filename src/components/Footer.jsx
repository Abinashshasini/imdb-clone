import styles from '../styles/Footer.module.css';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.headContainer}>
        <h2>Terms of use</h2>
        <h2>Privacy policy</h2>
        <h2>About</h2>
        <h2>Blog</h2>
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
        <FaFacebookSquare />
        <FaGithubSquare />
        <FaInstagramSquare />
        <FaLinkedin />
      </div>
    </footer>
  );
};

export default Footer;
