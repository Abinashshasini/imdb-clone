import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/VideoPopUp.module.css';

const VideoPopup = ({
  setShowTrailer,
  trailerKey,
  setTrailerKey,
  trailerName,
}) => {
  // * Function to hide pop video pop up * //
  const handleHidePopup = (e) => {
    e.stopPropagation();
    setShowTrailer(false);
    setTrailerKey('');
  };

  // * Fix the body when opened * //
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className={styles.container} onClick={(e) => handleHidePopup(e)}>
      <div className={styles.videoCnt}>
        <div className={styles.videoNameCnt}>
          <h1>{trailerName}</h1>
          <span
            className={styles.closeIcon}
            onClick={(e) => handleHidePopup(e)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className={styles.playerCnt}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailerKey}`}
            controls
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default VideoPopup;
