import CastCard from '../components/CastCard';
import styles from '../styles/CastClientCmp.module.css';

const CastClientCmp = ({ cast, crew }) => {
  return (
    <section className={styles.container}>
      <h2>Top Billed Cast</h2>
      <div className={styles.backdropCnt}>
        <div className={styles.wrapper}>
          {cast?.map((element) => (
            <CastCard
              id={element.id}
              gender={element.gender}
              name={element.name}
              character={element.character}
              src={element.profile_path}
              width="140px"
              height="175px"
            />
          ))}
          {cast?.length <= 3 &&
            crew?.map((element, index) => (
              <CastCard
                id={element.id}
                gender={element.gender}
                name={element.name}
                character={element.job}
                src={element.profile_path}
                width="140px"
                height="175px"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CastClientCmp;
