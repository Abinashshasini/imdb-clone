'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useKeyPress from '@/hooks/useKeyPress';
import styles from '../styles/HeroSection.module.css';

const HeroSearchBar = () => {
  const router = useRouter();
  // * Required state for search term * //
  const [searchTerm, setSearchTerm] = useState('');

  const enterKeyPressed = useKeyPress('Enter');

  // * Function to handle click on search bar * //
  const handleClickonSearch = () => {
    router.push(`/search?searchterm=${searchTerm}`);
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      handleClickonSearch();
    }
  }, [enterKeyPressed]);

  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Search for a movie, tv show, person...."
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleClickonSearch}>Search</button>
    </div>
  );
};

export default HeroSearchBar;
