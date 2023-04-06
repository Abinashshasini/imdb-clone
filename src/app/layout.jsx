import Header from './components/Header';
import './globals.css';

export const metadata = {
  title: 'Imdb clone',
  description: 'This is a IMDB clone website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Header */}
      <Header />
      {/* Navbar */}

      {/* Search Bar */}

      <body>{children}</body>
    </html>
  );
}
