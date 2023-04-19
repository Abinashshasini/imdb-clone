import styles from '../../styles/ResultsPage.module.css';

export const metadata = {
  title: 'Explore TV shows',
  description: 'This is a IMDb clone website',
};

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <div>{children}</div>
    </main>
  );
}
