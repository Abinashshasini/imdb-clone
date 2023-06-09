import API from '../../../api';
import DetailsClientCmp from '../../../clientComponents/DetailsClientCmp';

export default async function MovieDetailsPage({ params }) {
  // * Getting the movie id from params * //
  const mediaID = params.mediaid.split('-')[1];
  const mediaType = params.mediaid.split('-')[0];

  // * Fething media details * //
  const mediaDetails = await API.fetchMovieOrTvDetails(mediaType, mediaID);

  // * Fetching credits details * //
  const creditDetails = await API.fetchMovieOrTvSectionData(
    mediaType,
    mediaID,
    'credits'
  );

  // * This will be caught by the error page and passed to the page as props * //
  if (!mediaDetails || !creditDetails) {
    throw new Error('Failed to fetch data');
  }

  return (
    <main>
      <DetailsClientCmp
        data={mediaDetails}
        creditsData={creditDetails}
        type={mediaType}
        mediaID={mediaID}
      />
    </main>
  );
}
