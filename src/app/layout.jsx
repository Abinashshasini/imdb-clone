import Footer from '../components/Footer';
import Header from '../components/Header';
import '../globals.css';

export const metadata = {
  title:
    'IMDB - Millions of movies, TV shows and people to discover. Explore now.',
  description:
    'Millions of movies, TV shows and people to discover. Explore now. This is a TMDB clone website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
