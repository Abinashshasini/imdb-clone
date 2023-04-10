import API from '../../../api';
import SearchResultsClientCmp from '../../../clientComponents/SearchResultsClientCmp';

export default async function SearchResults({ params: { searchTerm } }) {
  const response = await API.fetchSearchResults(searchTerm, 1);

  if (!response) {
    throw new Error('Whoops something went wrong');
  }

  return <SearchResultsClientCmp data={response.results} />;
}
