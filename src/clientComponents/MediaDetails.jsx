import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaImdb, FaLink } from 'react-icons/fa';
import { IMAGE_BASE_URL } from '../config';
import API from '../api';
import { handleConvertMoney } from '../utils';
import styles from '../styles/MediaDetails.module.css';

const MediaDetails = ({ data }) => {
  const { mediaid } = useParams();
  // * Getting the movie id from props * //
  const mediaID = mediaid.split('-')[1];
  const mediaType = mediaid.split('-')[0];

  // * Required states and refs * //
  const [keywords, setKeyWords] = useState([]);
  const [externalIDS, setExternalIDS] = useState([]);
  const [keywordLoading, setKeywordLoading] = useState(true);

  // * Function to fetch media keywords * //
  const handleFetchMediaKeyWords = async () => {
    try {
      const response = await API.fetchMovieOrTvSectionData(
        mediaType,
        mediaID,
        'keywords'
      );
      setKeywordLoading(false);
      if (response) {
        setKeyWords(response.keywords || response.results);
      }
    } catch (error) {
      console.error('Something went wrong while fetching keywords', error);
    } finally {
      setKeywordLoading(false);
    }
  };

  // * Function to fetch media external id's * //
  const handleFetchMediaExternalIDS = async () => {
    try {
      const response = await API.fetchMovieOrTvSectionData(
        mediaType,
        mediaID,
        'external_ids'
      );
      if (Object.keys(response).length > 0) {
        setExternalIDS(response);
      }
    } catch (error) {
      console.error('Something went wrong while fetching keywords', error);
    }
  };

  // * Effect to fetch media details * //
  useEffect(() => {
    handleFetchMediaKeyWords();
    handleFetchMediaExternalIDS();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.iconsContainer}>
        <Link
          href={`https://www.facebook.com/${externalIDS.facebook_id || ''}`}
        >
          <BsFacebook size="large" />
        </Link>
        <Link href={`https://twitter.com/${externalIDS.twitter_id || ''}`}>
          <BsTwitter size="large" />
        </Link>
        <Link
          href={`https://www.instagram.com/${externalIDS.instagram_id || ''}`}
        >
          <BsInstagram size="large" />
        </Link>
        <Link href={`https://www.imdb.com/title/${externalIDS.imdb_id || ''}`}>
          <FaImdb size="large" />
        </Link>
        <div className={styles.bar} />
        <Link href={data.homepage}>
          <FaLink className={styles.homeIcn} />
        </Link>
      </div>
      <div className={styles.mediaFactsCnt}>
        <h3>Status</h3>
        <p>{data?.status}</p>
      </div>

      {mediaType === 'tv' && (
        <div className={styles.mediaFactsCnt}>
          <h3>Type</h3>
          <p>{data?.type}</p>
        </div>
      )}

      {mediaType === 'tv' && data?.networks.length > 0 && (
        <div className={styles.mediaFactsCnt}>
          <h3>Network</h3>
          <img src={IMAGE_BASE_URL + 'h30' + data.networks[0].logo_path}></img>
        </div>
      )}

      <div className={styles.mediaFactsCnt}>
        <h3>Original Language</h3>
        <p>{data?.spoken_languages[0]?.name}</p>
      </div>

      {mediaType === 'movie' && (
        <div className={styles.mediaFactsCnt}>
          <h3>Budget</h3>
          <p>{data.budget ? handleConvertMoney(data.budget) : '-'}</p>
        </div>
      )}

      {mediaType === 'movie' && (
        <div className={styles.mediaFactsCnt}>
          <h3>Revenue</h3>
          <p>{data.revenue ? handleConvertMoney(data.revenue) : '-'}</p>
        </div>
      )}

      <h3 className={styles.keywordTitle}>Keywords</h3>
      {keywordLoading && (
        <div className={styles.keywordsContainer}>
          {new Array(15).fill(1).map((_) => (
            <div className={styles.loading} />
          ))}
        </div>
      )}
      <div className={styles.keywordsContainer}>
        {!keywordLoading && keywords?.length > 0
          ? keywords?.map((keyword) => (
              <div key={keyword.id} className={styles.keyword}>
                {keyword.name}
              </div>
            ))
          : !keywordLoading && 'No keywords available 😔'}
      </div>
    </div>
  );
};

export default MediaDetails;
