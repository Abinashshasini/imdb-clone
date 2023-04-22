import API from '../../api';
import ResultsClientCmp from '../../clientComponents/ResultsClientCmp';

export default async function TVResultsPage() {
  const res = await API.fetchMoviesOrTvShows({
    type: 'discover',
    category: 'tv',
    page: 1,
  });

  // * This will be caught by the error page and passed to the page as props * //
  if (!res) {
    throw new Error('Failed to fetch data');
  }

  return <ResultsClientCmp data={res.results} type="tv" />;
}
