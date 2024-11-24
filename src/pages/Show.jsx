import { useParams } from 'react-router-dom';
import { getShowData } from '../api/tvmaze';
import { useQuery } from '@tanstack/react-query';

function Show() {
  const { showId } = useParams(); // Destructure showId from params

  const { data, error, isLoading } = useQuery({
    queryKey: ['show', showId], // Add showId to differentiate queries
    queryFn: async () => {
      return await getShowData(showId); // Return the result of the API call
    },
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Show Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre> {/* Render data as JSON */}
    </div>
  );
}

export default Show;
