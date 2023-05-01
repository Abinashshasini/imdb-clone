import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FaImdb, FaLink } from 'react-icons/fa';
import API from '../api';
import styles from '../styles/MediaDetails.module.css';
import Link from 'next/link';

const MediaDetails = ({ data }) => {
  console.log('data: ', data);
  const { mediaid } = useParams();
  // * Getting the movie id from props * //
  const mediaID = mediaid.split('-')[1];
  const mediaType = mediaid.split('-')[0];

  // * Required states and refs * //
  const [keywords, setKeyWords] = useState([]);
  const [externalIDS, setExternalIDS] = useState([]);
  console.log('externalIDS: ', externalIDS);

  // * Function to fetch media keywords * //
  const handleFetchMediaKeyWords = async () => {
    try {
      const response = await API.fetchMovieOrTvSectionData(
        mediaType,
        mediaID,
        'keywords'
      );
      if (response) {
        setKeyWords(response.keywords || response.results);
      }
    } catch (error) {
      console.error('Something went wrong while fetching keywords', error);
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
      <h3 className={styles.keywordTitle}>Keywords</h3>
      <div className={styles.keywordsContainer}>
        {keywords?.map((keyword) => (
          <div key={keyword.id} className={styles.keyword}>
            {keyword.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MediaDetails;
