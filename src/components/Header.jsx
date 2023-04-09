import DarkModeSwitch from './DarkModeSwitch';
import Logo from '../assets/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/">
          <Image src={Logo} alt="Logo" height={20} width={150} />
        </Link>
        <Link href="/movie">
          <h2 className="hidden sm:inline cursor-pointer">Movies</h2>
        </Link>
        <Link href="/tv">
          <h2 className="hidden sm:inline cursor-pointer">TV Shows</h2>
        </Link>
        <h2 className="hidden sm:inline cursor-pointer">More</h2>
      </div>
      <div className={styles.wrapper}>
        <DarkModeSwitch />
        <div className={styles.userIcon}>A</div>
      </div>
    </header>
  );
};

export default Header;
