import Image from 'next/image';
import NotFoundImage from '../assets/notFound.svg';
import styles from '../styles/NotFound.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <Image src={NotFoundImage} alt="Logo" height={250} width={250} />
      <p className={styles.text}>
        Sorry there are no movies that matched your search!
      </p>
    </div>
  );
};

export default NotFound;
