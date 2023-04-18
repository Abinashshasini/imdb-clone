'use client';
import { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { HiOutlineSearch } from 'react-icons/hi';
import { BiMenu } from 'react-icons/bi';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

const Header = () => {
  const headerStyles = {
    show: {
      backdropFilter: 'blur(3.5px)',
      background: 'rgba(3, 29, 51, 3)',
    },
    hide: {
      transform: 'translateY(-60px)',
    },
  };

  // * Required states for header * //
  const [style, setStyle] = useState('show');

  // * Function to measure scroll position * //
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 400) {
      setStyle('hide');
    } else {
      setStyle('show');
    }
  };

  // * Effect to listin to the window scroll event * //
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} style={headerStyles[style]}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src={Logo} alt="Logo" height={20} width={150} />
          </Link>
        </div>
        <div className={styles.textWrapper}>
          <Link href="/movie" className="hidden sm:inline cursor-pointer">
            <h2>Movies</h2>
          </Link>
          <Link href="/tv" className="hidden sm:inline cursor-pointer">
            <h2>TV Shows</h2>
          </Link>
          <h2 className="hidden sm:inline cursor-pointer">People</h2>
          <h2 className="hidden sm:inline cursor-pointer">More</h2>
          <Link href="/search" className="cursor-pointer">
            <HiOutlineSearch className="text-xl cursor-pointer text-white" />
          </Link>
          <BiMenu className="md:hidden text-2xl cursor-pointer text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
