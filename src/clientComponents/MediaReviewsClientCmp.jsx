'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AiTwotoneStar } from 'react-icons/ai';
import API from '../api';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import NoUserSvg from '../assets/male.svg';
import Image from 'next/image';
import styles from '../styles/MediaReviewsCmp.module.css';

const ReviewImageCmp = ({ src }) => {
  // * Required states for src * //
  const [imagePath, setImagePath] = useState(
    IMAGE_BASE_URL + POSTER_SIZE + src
  );

  // * Function to handle image erro * //
  const handleImageError = () => {
    setImagePath(NoUserSvg);
  };

  return (
    <Image
      src={imagePath}
      alt="Picture of the author"
      fill
      onError={handleImageError}
    />
  );
};

export default function MediaReviewsComponent() {
  const { mediaid } = useParams();
  // * Getting the movie id from props * //
  const mediaID = mediaid.split('-')[1];
  const mediaType = mediaid.split('-')[0];

  // * Required state for reviews * //
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // * Function to fetch media reviews * //
  const handleFethcMediaReviews = async () => {
    setLoading(true);
    try {
      const response = await API.fetchMovieOrTvSectionData(
        mediaType,
        mediaID,
        'reviews'
      );
      if (response) {
        setData(response.results);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(
        `Something wrong happend while fetching media reviews ${error}`
      );
    }
  };

  useEffect(() => {
    handleFethcMediaReviews();
  }, []);

  return (
    <>
      {data?.length > 0 && (
        <section className={styles.container}>
          <h2>Social Reviews</h2>
          <div className={styles.backdropCnt}>
            <div className={styles.wrapper}>
              {data.map((element) => (
                <div className={styles.cardContainer} key={element.id}>
                  <div className={styles.cardContainerLeft}>
                    <ReviewImageCmp src={element.author_details.avatar_path} />
                  </div>
                  <div className={styles.cardContainerRight}>
                    <div className={styles.userNameContainer}>
                      <h2>A review by {element.author}</h2>
                      {element.author_details.rating && (
                        <div className={styles.ratingContainer}>
                          {element.author_details.rating}
                          <AiTwotoneStar className="text-m cursor-pointer text-white" />
                        </div>
                      )}
                    </div>
                    <p className={styles.description}>
                      Written on{' '}
                      {new Date(element.created_at).toLocaleDateString(
                        'en-US',
                        {
                          weekday: 'long',
                          month: 'short',
                          day: 'numeric',
                        }
                      )}
                    </p>
                    <h5 className={styles.ratingContent}>{element.content}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
