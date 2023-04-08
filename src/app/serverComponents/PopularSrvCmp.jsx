import API from '../api';
import PopularClientCmp from '../clientComponents/PopularClientCmp';

// * Trending movie server component * //
export default async function PopularSrvCmp() {
  const populaMovieData = await API.fetchWhatsPopular('movie', 1);

  // * This will be caught by the error page and passed to the page as props * //
  if (!populaMovieData) {
    throw new Error('Failed to fetch data');
  }

  return <PopularClientCmp data={populaMovieData.results} />;
}
