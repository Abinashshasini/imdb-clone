import ReactPlayer from 'react-player';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import styles from '../styles/VideoPopUp.module.css';

const VideoPopup = ({ setShowTrailer, trailerDetails, setTrailerDetails }) => {
  const { key, name } = trailerDetails;
  // * Function to hide pop video pop up * //
  const handleHidePopup = (e) => {
    e.stopPropagation();
    setShowTrailer(false);
    setTrailerDetails({
      key: '',
      name: '',
    });
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
          <h1>{name}</h1>
          <span
            className={styles.closeIcon}
            onClick={(e) => handleHidePopup(e)}
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className={styles.playerCnt}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${key}`}
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
