import CardSkeleton from '../../skeleton/CardSkeleton';
import HorizontalSkeleton from '../../skeleton/HorizontalSkeleton';
import styles from '../../styles/MovieResultsPage.module.css';

const Loading = () => {
  return (
    <>
      <div className={styles.wrapperGrid}>
        {new Array(16).fill(1).map((_) => (
          <CardSkeleton type="large" />
        ))}
      </div>
      <div className={styles.wrapperFlex}>
        {new Array(16).fill(1).map((_) => (
          <HorizontalSkeleton />
        ))}
      </div>
    </>
  );
};

export default Loading;
