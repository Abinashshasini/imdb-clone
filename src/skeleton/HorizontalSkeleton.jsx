import styles from '../styles/Skeleton.module.css';

const HorizontalSkeleton = () => {
  return (
    <div className={styles.horizontalContainer}>
      <div className={`${styles.skeleton}  ${styles.skeletonImage}`}></div>
      <div className={styles.skeletonTextcontainer}>
        <div
          className={`${styles.skeleton} ${styles.skeletonText}`}
          style={{ width: '50%' }}
        ></div>

        <div
          className={`${styles.skeleton} ${styles.skeletonText}`}
          style={{ width: '40%' }}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.skeletonText}`}
          style={{ width: '100%', marginTop: '10px' }}
        ></div>
        <div
          className={`${styles.skeleton} ${styles.skeletonText}`}
          style={{ width: '70%' }}
        ></div>
      </div>
    </div>
  );
};

export default HorizontalSkeleton;
