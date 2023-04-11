import styles from '../../styles/MovieResultsPage.module.css';

export default function RootLayout({ children }) {
  return (
    <main>
      <div className={styles.container}>{children}</div>
    </main>
  );
}
