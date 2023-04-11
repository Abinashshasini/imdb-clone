import styles from '../styles/Skeleton.module.css';

const CardSkeleton = ({ type = 'small' }) => {
  const SkeletonJSX = () => (
    <>
      <div
        className={`styles.container ${
          type === 'large' ? styles.containerBig : styles.containerSmall
        }`}
      >
        <div
          className={`${styles.skeleton}  ${
            type === 'large'
              ? styles.skeletonImageBig
              : styles.skeletonImageSmall
          }`}
        ></div>
        <div className={styles.lineContainer}>
          <div className={`${styles.skeleton} ${styles.skeletonText}`}></div>
          <div
            className={`${styles.skeleton} ${styles.skeletonText}`}
            style={{ width: '40%' }}
          ></div>
        </div>
      </div>
    </>
  );

  return (
    <>
      {type === 'small' ? (
        SkeletonJSX()
      ) : (
        <div className={styles.container}>
          <div className={styles.wrapper}>{SkeletonJSX()}</div>
        </div>
      )}
    </>
  );
};

export default CardSkeleton;
