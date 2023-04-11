'use client';
import Image from 'next/image';
import styles from '../../styles/Error.module.css';
import ErrorImage from '../../assets/error.svg';

export default function Error({ reset }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={ErrorImage} alt="Error image" height={250} width={250} />
      </div>
      <p className={styles.text}>Whoops something went wrong!!</p>
      <button onClick={reset}>
        <p>Try Again</p>
      </button>
    </div>
  );
}
