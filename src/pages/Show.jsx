import { useParams } from 'react-router-dom';
import { getShowData } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';
import ShowMainDetails from '../components/shows/ShowMainDetails';
import ShowDetails from '../components/shows/ShowDetails';

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
  return (
    <div>
      <h1>Show Details</h1>
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      <div>
        <ShowMainDetails />
        <div>
          <ShowDetails />
        </div>
      </div>
    </div>
  );
}

export default Show;
