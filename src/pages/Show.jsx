import { useParams } from 'react-router-dom';
import { getShowData } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

function Show() {
  const { showId } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['show', showId],
    queryFn: async () => {
      return await getShowData(showId);
    },
    staleTime: 1000 * 60 * 5,
  });
  return (
    <div>
      <h1>Show Details</h1>
      {error && <div>{error.message}</div>}
      {isLoading && <div>Loading...</div>}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Show;
