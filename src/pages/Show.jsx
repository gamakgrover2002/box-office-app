import { useParams } from 'react-router-dom';
import { useShowById } from '../hooks/useShowById';

function Show() {
  const params = useParams();
  const { showData, showError } = useShowById(params.showId);

  return (
    <div>
      {showError && <h1>showError.message</h1>}
      {params.showId}
    </div>
  );
}

export default Show;
