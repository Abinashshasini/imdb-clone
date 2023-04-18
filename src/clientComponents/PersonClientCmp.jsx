'use client';
import CarouselHeader from '../components/CarouselHeader';
import PopularPersonCard from '../components/PopularPersonCard';
import styles from '../styles/Carousel.module.css';

const PersonClientCmp = ({ data }) => {
  return (
    <>
      <CarouselHeader title="Popular Person's" />
      <div className={styles.shadowContainer}>
        <div className={styles.wrapper} style={{ minHeight: '250px' }}>
          {data &&
            data.length > 0 &&
            data.map((element) => (
              <PopularPersonCard
                key={element.id}
                knownFor={element.known_for}
                department={element.known_for_department}
                title={element.name}
                photo={element.profile_path}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default PersonClientCmp;
