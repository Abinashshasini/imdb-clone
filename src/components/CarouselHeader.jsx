'use client';
import { useState } from 'react';
import styles from '../styles/CarouselHeader.module.css';

const CarouselHeader = ({ title, options, handleGetSelectedTab }) => {
  // * Required States * //
  const [selected, setSelected] = useState(options ? options[0].name : '');

  // * Function to handle Selection * //
  const handleSelection = (_selected) => {
    setSelected(_selected.name);
    handleGetSelectedTab(_selected.category);
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div className={styles.optionsWrapper}>
        {options &&
          options.length > 0 &&
          options.map((element, index) => (
            <div key={`${element.name}-${index}`}>
              <input
                type="checkbox"
                checked={selected === element.name}
                readOnly
              />
              <span
                key={element.id}
                className={styles.option}
                onClick={() => {
                  handleSelection(element);
                }}
              >
                <p>{element.name}</p>
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarouselHeader;
