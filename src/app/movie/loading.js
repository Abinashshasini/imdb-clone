import CardBigSkeleton from '@/skeleton/CardBigSkeleton';
import styles from '../../styles/Results.module.css';

export default function Loading() {
  return (
    <div className={styles.wrapper}>
      <CardBigSkeleton />
    </div>
  );
}
