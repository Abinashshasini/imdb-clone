import API from '../api';
import PersonClientCmp from '../clientComponents/PersonClientCmp';

export default async function PersonSrvCmp() {
  const populaMovieData = await API.fetchPopularPersons();

  // * This will be caught by the error page and passed to the page as props * //
  if (!populaMovieData) {
    throw new Error('Failed to fetch data');
  }

  return <PersonClientCmp data={populaMovieData.results} />;
}
