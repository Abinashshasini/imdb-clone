import Image from 'next/image';
import Logo from '../assets/logo.svg';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <Image src={Logo} alt="Logo" height={20} width={150} />
      <p>© {new Date().getFullYear()} TMDB clone, Inc</p>
    </footer>
  );
};

export default Footer;
