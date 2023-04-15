'use client';
import PopularPersonCard from '../components/PopularPersonCard';
import containerStyles from '../styles/SectionClientCmp.module.css';

const PersonClientCmp = ({ data }) => {
  return (
    <section
      className={containerStyles.container}
      style={{ flexDirection: 'column', paddingTop: 0 }}
    >
      <h2>Popular Person&apos;s</h2>
      <div className={containerStyles.wrapper} style={{ minHeight: '250px' }}>
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
    </section>
  );
};

export default PersonClientCmp;
