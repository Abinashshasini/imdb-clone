import API from '../api';
import LatestMovies from '../clientComponents/LatestClientCmp';

// * Latest movie server component * //
export default async function LatestSrvCmp() {
  // * Fetching data * //
  const response = await API.fetchCarouselData({
    type: 'movie',
    category: 'upcoming',
    page: 1,
  });

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return <LatestMovies data={response.results} />;
}
