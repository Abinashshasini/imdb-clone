import CardBigSkeleton from '@/skeleton/CardBigSkeleton';
import styles from '../../styles/Results.module.css';

export default function Loading() {
  return (
    <div className={styles.container}>
      <h1>Popular TV Shows</h1>
      <div className={styles.wrapper}>
        <CardBigSkeleton type="large" />
      </div>
    </div>
  );
}
