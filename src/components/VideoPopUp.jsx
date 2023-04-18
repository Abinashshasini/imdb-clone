import ReactPlayer from 'react-player/youtube';
import { GrClose } from 'react-icons/gr';

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  // * Function to hide pop video pop up * //
  const handleHidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`videoPopup ${show ? 'visible' : ''}`}>
      <div className="opacityLayer" onClick={handleHidePopup}></div>
      <div className="videoPlayer">
        <span className="closeBtn" onClick={handleHidePopup}>
          <GrClose />
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
