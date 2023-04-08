import styles from '../styles/MovieCardSkeleton.module.css';

const MovieCardSkeleton = () => {
  const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      {dummyArr.map((element) => (
        <div className={styles.container} key={element}>
          <div className={`${styles.skeleton} ${styles.skeletonImage}`}></div>
          <div className={styles.lineContainer}>
            <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
            <div
              className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonText__description}`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieCardSkeleton;
