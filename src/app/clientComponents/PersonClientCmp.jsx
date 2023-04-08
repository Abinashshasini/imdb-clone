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
    <div
      className={containerStyles.container}
      style={{ flexDirection: 'column' }}
    >
      <h2>Popular Person&apos;s</h2>
      <div
        className={containerStyles.personsWrapperHidden}
        style={{ maxHeight: toggleView ? 'max-content' : '490px' }}
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
        <div className={containerStyles.loadMore} onClick={handleToggleView}>
          <p>{toggleView ? 'View Less' : 'View More'}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonClientCmp;
