import Image from 'next/image';
import SearchImage from '../../assets/search.svg';
import styles from '../../styles/NotFound.module.css';

// * Search page component * //
const SearchPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={SearchImage}
          alt="Search for response"
          height={250}
          width={250}
        />
      </div>
      <p className={styles.text}>
        Empty space so boring!! start searching for a movie, tv show, person....
      </p>
    </div>
  );
};

export default SearchPage;
