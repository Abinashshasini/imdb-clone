import SearchBar from '../../components/SearchBar';
import styles from '../../styles/SearchPage.module.css';

export const metadata = {
  title: 'Search for a movie, tv show, person...',
  description: 'Search for a movie, tv show, person...',
};

export default function RootLayout({ children }) {
  return (
    <main className={styles.main}>
      <SearchBar page="search" />
      <div>{children}</div>
    </main>
  );
}
