import styles from '../styles/DetailsSkeleton.module.css';

const DetailsSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.detailsContainer}>
        <div className={`${styles.skeleton} ${styles.imageContainer}`} />
        <div className={styles.textContaner}>
          <div className={`${styles.skeleton} ${styles.heading}`} />
          <div className={`${styles.skeleton} ${styles.details}`} />
          <div className={`${styles.skeleton} ${styles.overview}`} />
          <div className={`${styles.skeleton} ${styles.description}`} />
          <div className={`${styles.skeleton} ${styles.description}`} />
          <div className={`${styles.skeleton} ${styles.description}`} />
          <div
            className={`${styles.skeleton} ${styles.description}`}
            style={{ width: '70%' }}
          ></div>
        </div>
      </div>
      <div className={styles.crewContainer}>
        {new Array(10).fill(1).map((_) => (
          <div className={styles.crewWraper}>
            <div className={`${styles.skeleton} ${styles.crewImage}`} />
            <div>
              <div className={`${styles.skeleton} ${styles.description}`} />
              <div
                className={`${styles.skeleton} ${styles.description}`}
                style={{ marginTop: '10px' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailsSkeleton;
