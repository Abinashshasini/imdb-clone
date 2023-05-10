import API from '../../api';
import ResultsClientCmp from '../../clientComponents/ResultsClientCmp';

export default async function TVResultsPage() {
  const response = await API.fetchDiscoverMediaData({
    type: 'tv',
    page: 1,
  });

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return <ResultsClientCmp data={response.results} type="tv" />;
}
