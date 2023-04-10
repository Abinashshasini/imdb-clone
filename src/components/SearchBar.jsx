'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useKeyPress from '../hooks/useKeyPress';
import styles from '../styles/HeroSection.module.css';

const SearchBar = ({ page }) => {
  const router = useRouter();
  // * Required state for search term * //
  const [searchTerm, setSearchTerm] = useState('');

  const enterKeyPressed = useKeyPress('Enter');

  // * Function to handle click on search bar * //
  const handleClicknOnSearch = (e) => {
    if (searchTerm.length > 0) {
      setSearchTerm('');
      router.push(`/search/${searchTerm}`);
    }
  };

  useEffect(() => {
    if (searchTerm.length > 0) {
      handleClicknOnSearch();
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
      <button onClick={handleClicknOnSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
