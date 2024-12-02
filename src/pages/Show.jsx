import { useParams } from 'react-router-dom';
import { getShowData } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainDetails from '../components/shows/ShowMainDetails';
import ShowDetails from '../components/shows/ShowDetails';
import Season from '../components/shows/Season';
import Cast from '../components/shows/Cast';

function Show() {
  const { showId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['show', showId],
    queryFn: async () => {
      return await getShowData(showId);
    },
    staleTime: 1000 * 60 * 5,
  });
  console.log(data);
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <div>Loading...</div>;

  const { name, image, rating, summary, genres, status, network, premiered } =
    data || {};

  return (
    <div>
      <h1>Show Details</h1>
      <ShowMainDetails
        name={name || 'NA'}
        image={image?.original || null}
        rating={rating?.average || null}
        summary={summary || null}
        genre={genres || []}
      />
      <ShowDetails
        status={status || null}
        network={network || null}
        premiered={premiered || null}
      />
      <Season season={data._embedded.seasons || null} />
      <Cast cast={data._embedded.cast || null} />
    </div>
  );
}

export default Show;
