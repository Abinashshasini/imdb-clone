import styles from '../styles/Skeleton.module.css';

const CardBigSkeleton = ({ type = 'small' }) => {
  const dummyArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      {dummyArr.map((element) => (
        <div
          className={`styles.container ${
            type === 'large' ? styles.containerBig : styles.containerSmall
          }`}
          key={element}
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
              className={`${styles.skeleton} ${styles.skeletonText} ${styles.skeletonText__description}`}
            ></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardBigSkeleton;
