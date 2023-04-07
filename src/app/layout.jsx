import Header from './components/Header';
import Providers from './Providers';
import './globals.css';

export const metadata = {
  title: 'IMDb clone',
  description: 'This is a IMDb clone website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />
          {/* Navbar */}

          {/* Search Bar */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
