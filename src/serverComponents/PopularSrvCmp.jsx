import API from '../api';
import Carousel from '../components/Carousel';

// * Popular movie server component * //
export default async function PopularSrvCmp() {
  // * Fetching data * //
  const response = await API.fetchMoviesOrTvShows({
    type: 'movie',
    category: 'popular',
    page: 1,
  });

  // * options for popular movie section * //
  const options = [
    {
      id: 1,
      name: 'Movies',
      category: 'movie',
    },
    {
      id: 2,
      name: 'TV Shows',
      category: 'tv',
    },
  ];

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch data');
  }

  return (
    <Carousel
      data={response.results}
      options={options}
      title="What's Popular"
      apiParams={{
        type: 'movie',
        category: 'popular',
        page: 1,
      }}
    />
  );
}
