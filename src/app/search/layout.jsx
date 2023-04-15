import SearchBar from '../../components/SearchBar';

export default function RootLayout({ children }) {
  return (
    <main className="mt-16">
      <SearchBar page="search" />
      <div>{children}</div>
    </main>
  );
}
