import SearchBar from '../../components/SearchBar';

export const metadata = {
  title: 'Search for a movie, tv show, person...',
  description: 'Search for a movie, tv show, person...',
};

export default function RootLayout({ children }) {
  return (
    <main className="mt-16">
      <SearchBar page="search" />
      <div>{children}</div>
    </main>
  );
}
