import API from '../api';
import Carousel from '../components/Carousel';

// * Trending movie server component * //
export default async function TrendingSrvCmp() {
  // * Fetching data * //
  const response = await API.fetchMoviesOrTvShows({
    type: 'trending',
    category: 'all',
    page: 1,
    timing: 'day',
  });

  // * options for trending movie section * //
  const options = [
    {
      id: 1,
      name: 'Today',
      category: 'day',
    },
    {
      id: 2,
      name: 'This Week',
      category: 'week',
    },
  ];

  // * This will be caught by the error page and passed to the page as props * //
  if (!response) {
    throw new Error('Failed to fetch trending movies data');
  }

  return (
    <Carousel
      data={response.results}
      options={options}
      title="Trending"
      apiParams={{
        type: 'trending',
        category: 'all',
        page: 1,
      }}
    />
  );
}
