import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import API from '../api';

export default function MovieReviewsComponent() {
  const { mediaid } = useParams();
  // * Getting the movie id from props * //
  const mediaID = mediaid.split('-')[1];
  const mediaType = mediaid.split('-')[0];

  // * Required state for reviews * //
  const [data, setData] = useState([]);
  console.log('data: ', data);
  const [loading, setLoading] = useState(false);

  // * Function to fetch media reviews * //
  const handleFethcMediaReviews = async () => {
    setLoading(true);
    try {
      const response = await API.fetchMovieOrTvReviews(mediaType, mediaID);
      console.log('response: ', response);
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
    <div>
      <h1>Media review details</h1>
    </div>
  );
}
