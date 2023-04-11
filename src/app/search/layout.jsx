import SearchBar from '../../components/SearchBar';

export default function RootLayout({ children }) {
  return (
    <main>
      <SearchBar page="search" />
      <div>{children}</div>
    </main>
  );
}
