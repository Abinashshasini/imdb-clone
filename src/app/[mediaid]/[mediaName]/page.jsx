import API from '../../../api';
import DetailsClientCmp from '../../../clientComponents/DetailsClientCmp';

export default async function MovieDetailsPage({ params }) {
  // * Getting the movie id from params * //
  const mediaID = params.mediaid.split('-')[1];
  const mediaType = params.mediaid.split('-')[0];
  const response = await API.fetchMovieOrTvDetails(mediaType, mediaID);

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return <DetailsClientCmp data={response} type={mediaType} />;
}
