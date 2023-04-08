import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../assets/logo.svg';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={Logo} alt="Logo" height={20} width={150} />
        <h2 className="hidden sm:inline">Movies</h2>
        <h2 className="hidden sm:inline">TV Shows</h2>
        <h2 className="hidden sm:inline">More</h2>
      </div>
      <div className={styles.wrapper}>
        <DarkModeSwitch />
        <div className={styles.userIcon}>A</div>
      </div>
    </header>
  );
};

export default Header;
