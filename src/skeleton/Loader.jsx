import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.spinner}>
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
