'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useKeyPress from '../hooks/useKeyPress';
import { GoSearch } from 'react-icons/go';
import { RxCross2 } from 'react-icons/rx';
import styles from '../styles/SearchBar.module.css';

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
    <div
      className={
        page === 'home' ? styles.searchBarHome : styles.searchBarSearch
      }
    >
      {page === 'search' && (
        <div>
          <GoSearch />
        </div>
      )}

      <input
        type="text"
        placeholder="Search for a movie, tv show, person...."
        autoComplete="off"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {page === 'search' && searchTerm.length > 0 && (
        <div onClick={() => setSearchTerm('')}>
          <RxCross2 />
        </div>
      )}
      {page === 'home' && (
        <button onClick={handleClicknOnSearch}>Search</button>
      )}
    </div>
  );
};

export default SearchBar;
