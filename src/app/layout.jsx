import Header from '../components/Header';
import Providers from './Providers';
import Footer from '../components/Footer';
import '../globals.css';

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
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
