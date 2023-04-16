import { useRef, useEffect } from 'react';
import { BsFillPlayFill, BsBookmarkFill, BsStarFill } from 'react-icons/bs';
import { AiOutlineUnorderedList, AiFillHeart } from 'react-icons/ai';
import styles from '../styles/MediaPlay.module.css';

const MediaPlay = ({ percentage }) => {
  // * Required states and refs * //
  const circleOneRef = useRef(null);
  const circleTwoRef = useRef(null);

  // * Effect to calculate the total length of circle if content is available on DOM * //
  useEffect(() => {
    const length = circleTwoRef.current.getTotalLength();
    const _percentage = Math.floor((Number(percentage) * 100) / 10);
    circleTwoRef.current.style.strokeDasharray = length;

    // circle color code
    if (_percentage <= 20) {
      circleOneRef.current.style.stroke = '#d40242';
      circleTwoRef.current.style.stroke = '#d40242';
    } else if (_percentage > 20 && _percentage <= 60) {
      circleOneRef.current.style.stroke = '#d29001';
      circleTwoRef.current.style.stroke = '#d29001';
    } else {
      circleOneRef.current.style.stroke = '#00e55b';
      circleTwoRef.current.style.stroke = '#00e55b';
    }

    // circle fill percentage code
    if (percentage !== 0) {
      circleTwoRef.current.style.strokeDashoffset =
        100 - (_percentage / 100) * 100;
    } else {
      circleTwoRef.current.style.strokeDashoffset = length;
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.percentageWrp}>
        <div className={styles.percentageContainer}>
          <div className={styles.percentage}>
            {percentage ? Math.floor((Number(percentage) * 100) / 10) : 0}%
          </div>
          <svg width="58" height="58">
            <circle
              className={styles.circle1}
              cx="31"
              cy="27"
              r="24"
              ref={circleOneRef}
            ></circle>
            <circle
              className={styles.circle2}
              cx="31"
              cy="27"
              r="24"
              ref={circleTwoRef}
            ></circle>
          </svg>
        </div>
        <h3>Users score</h3>
      </div>
      <div class={styles.pipe}></div>
      <div className={styles.iconsContainer}>
        <div className={styles.iconsWrp}>
          <AiOutlineUnorderedList />
        </div>
        <div className={styles.iconsWrp}>
          <AiFillHeart />
        </div>
        <div className={styles.iconsWrp}>
          <BsBookmarkFill style={{ width: '12px' }} />
        </div>
        <div className={styles.iconsWrp}>
          <BsStarFill style={{ width: '14px' }} />
        </div>
      </div>
      <div className={styles.playContainer}>
        <BsFillPlayFill className="text-2xl cursor-pointer text-white" />
        Play Trailer
      </div>
    </div>
  );
};

export default MediaPlay;
