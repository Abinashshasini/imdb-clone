import API from '../api';
import TopRatedClientCmp from '../clientComponents/TopRatedClientCmp';

export default async function TopRatedSrvCmp() {
  const topRatedData = await API.fetchTopRatedMovies();

  // * This will be caught by the error page and passed to the page as props * //
  if (!topRatedData) {
    throw new Error('Failed to fetch data');
  }

  return <TopRatedClientCmp data={topRatedData.results} />;
}
