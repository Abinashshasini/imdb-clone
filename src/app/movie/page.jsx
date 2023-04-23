import API from '../../api';
import ResultsClientCmp from '../../clientComponents/ResultsClientCmp';

export default async function MovieResultsPage() {
  const response = await API.fetchDiscoverMediaData({
    type: 'movie',
    page: 1,
  });
  console.log('response'), response;

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return <ResultsClientCmp data={response.results} type="movie" />;
}
