import Header from '../components/Header';
import Providers from './Providers';
import '../globals.css';

export const metadata = {
  title:
    'IMDB - Millions of movies, TV shows and people to discover. Explore now.',
  description: 'This is a IMDb clone website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          <div className="rootContainer">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
