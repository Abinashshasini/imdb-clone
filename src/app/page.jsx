import HeroSection from '../clientComponents/HeroSection';
import TrendingSrvCmp from '../serverComponents/TrendingSrvCmp';
import PopularSrvCmp from '../serverComponents/PopularSrvCmp';
import TopRatedSrvCmp from '../serverComponents/TopRatedSrvCmp';
import PersonSrvCmp from '../serverComponents/PersonSrvCmp';
import Footer from '../components/Footer';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection />
      <section className={styles.carouselWrapper}>
        <TrendingSrvCmp />
        <PopularSrvCmp />
        {/* <TopRatedSrvCmp />
        <PersonSrvCmp /> */}
      </section>
      <Footer />
    </main>
  );
}
