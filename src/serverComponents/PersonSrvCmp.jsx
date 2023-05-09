import API from '../api';
import PersonClientCmp from '../clientComponents/PersonClientCmp';

// * Popular person server component * //
export default async function PersonSrvCmp() {
  // * Fetching data * //
  const response = await API.fetchMoviesTvshowsOrPersons({
    type: 'person',
    category: 'popular',
    page: 1,
  });

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return <PersonClientCmp data={response.results} />;
}
