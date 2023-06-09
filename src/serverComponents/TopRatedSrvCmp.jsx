import API from '../api';
import Carousel from '../components/Carousel';

// * Top rated movie server component * //
export default async function TopRatedSrvCmp() {
  // * Fetching data * //
  const response = await API.fetchMoviesTvshowsOrPersons({
    type: 'movie',
    category: 'top_rated',
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
      title="Top Rated"
      hasBackgroundImage={false}
      apiParams={{
        type: 'movie',
        category: 'top_rated',
        page: 1,
      }}
    />
  );
}
