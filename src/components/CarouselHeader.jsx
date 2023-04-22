'use client';
import { useState } from 'react';
import styles from '../styles/CarouselHeader.module.css';

const CarouselHeader = ({ title, options, handleGetSelectedTab }) => {
  // * Required States * //
  const [selected, setSelected] = useState(options ? options[0].name : '');
  const [left, setLeft] = useState(0);

  // * Function to handle Selection * //
  const handleSelection = (_selected, _index) => {
    setLeft(_index * 110);
    setTimeout(() => {
      setSelected(_selected.name);
    }, 300);
    handleGetSelectedTab(_selected.category);
  };

  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      {options && options.length > 0 && (
        <div className={styles.optionContainer}>
          <div className={styles.optionsWrapper}>
            {options.map((element, index) => (
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
                    handleSelection(element, index);
                  }}
                >
                  <p>{element.name}</p>
                </span>
              </div>
            ))}
            <span className={styles.optionMovingBG} style={{ left }} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CarouselHeader;
