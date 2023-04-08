import HeroSection from './components/HeroSection';
import TrendingSrvCmp from './serverComponents/TrendingSrvCmp';
import styles from './page.module.css';
import PopularSrvCmp from './serverComponents/PopularSrvCmp';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <TrendingSrvCmp />
      <PopularSrvCmp />
    </main>
  );
}
