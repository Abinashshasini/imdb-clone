import { useState, useEffect } from 'react';

/**
 * How to use
 * Pass the target key to get notified when target key pressed
 */
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // * If pressed key is our target key then set to true* //
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // * If released key is our target key then set to false * //
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', downHandler);
    window.addEventListener('keyup', upHandler);
    return () => {
      window.removeEventListener('keydown', downHandler);
      window.removeEventListener('keyup', upHandler);
    };
  }, []);

  return keyPressed;
}

export default useKeyPress;
