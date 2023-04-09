import DetailsClientCmp from '@/clientComponents/DetailsClientCmp';
import API from '../../api';

export default async function MovieServerPage() {
  const res = await API.fetchWhatsPopular('movie', 1);

  // * This will be caught by the error page and passed to the page as props * //
  if (!res) {
    throw new Error('Failed to fetch data');
  }

  return <DetailsClientCmp data={res.results} type="movie" />;
}
