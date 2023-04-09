import HeroSection from '../components/HeroSection';
import TrendingSrvCmp from '../serverComponents/TrendingSrvCmp';
import PopularSrvCmp from '../serverComponents/PopularSrvCmp';
import TopRatedSrvCmp from '../serverComponents/TopRatedSrvCmp';
import styles from './page.module.css';
import PersonSrvCmp from '../serverComponents/PersonSrvCmp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TrendingSrvCmp />
      <TopRatedSrvCmp />
      <PopularSrvCmp />
      <PersonSrvCmp />
      <Footer />
    </main>
  );
}
