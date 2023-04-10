import API from '../../api';
import ResultsClientCmp from '../../clientComponents/ResultsClientCmp';

export default async function MovieResultsPage() {
  const res = await API.fetchWhatsPopular('movie', 1);

  // * This will be caught by the error page and passed to the page as props * //
  if (!res) {
    throw new Error('Failed to fetch data');
  }

  return <ResultsClientCmp data={res.results} type="movie" />;
}
