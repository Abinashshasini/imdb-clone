import Footer from '../components/Footer';
import Header from '../components/Header';
import { Source_Sans_Pro } from 'next/font/google';
import '../globals.css';

const sansPro = Source_Sans_Pro({
  weight: ['200', '300', '400', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Millions of movies, TV shows and people to discover. Explore now.',
  description:
    'Millions of movies, TV shows and people to discover. Explore now. This is a TMDB clone website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sansPro.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
