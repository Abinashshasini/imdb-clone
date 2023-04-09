'use client';
import { useState } from 'react';
import PopularPersonCard from '../components/PopularPersonCard';
import containerStyles from '../styles/SectionClientCmp.module.css';

const PersonClientCmp = ({ data }) => {
  const [toggleView, setToggleView] = useState(false);

  // * Function to toggle view more and less * //
  const handleToggleView = () => {
    setToggleView(!toggleView);
  };

  return (
    <section
      className={containerStyles.container}
      style={{ flexDirection: 'column', paddingTop: 0 }}
    >
      <h2>Popular Person&apos;s</h2>
      <div className={containerStyles.loadMore} onClick={handleToggleView}>
        <p>{toggleView ? 'View Less...' : 'View More...'}</p>
      </div>
      <div
        className={containerStyles.personsWrapperHidden}
        style={{ maxHeight: toggleView ? 'max-content' : '530px' }}
      >
        <div className={containerStyles.personsWrapper}>
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
    </section>
  );
};

export default PersonClientCmp;
