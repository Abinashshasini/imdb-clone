import API from '../../../api';
import DetailsClientCmp from '../../../clientComponents/DetailsClientCmp';

export default async function MovieDetailsPage({ params }) {
  // * Getting the movie id from params * //
  const movieID = params.id.split('-')[0];
  const res = await API.fetchMovieOrTvDetails('movie', movieID);

  // * This will be caught by the error page and passed to the page as props * //
  if (!res) {
    throw new Error('Failed to fetch data');
  }

  return <DetailsClientCmp data={res} type="movie" />;
}
