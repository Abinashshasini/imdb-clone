import API from '../api';
import TrendingClientCmp from '../clientComponents/TrendingClientCmp';

// * Trending movie server component * //
export default async function TrendingSrvCmp() {
  const trendingMoviesData = await API.fetchTrendingMovies('day');

  // * This will be caught by the error page and passed to the page as props * //
  if (!trendingMoviesData) {
    throw new Error('Failed to fetch data');
  }

  return <TrendingClientCmp data={trendingMoviesData.results} />;
}
