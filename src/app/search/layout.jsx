import SearchBar from '../../components/SearchBar';
import styles from '../../styles/SearchPage.module.css';

export default function RootLayout({ children }) {
  return (
    <main>
      <SearchBar page="search" />
      <div className={styles.container}>{children}</div>
    </main>
  );
}
