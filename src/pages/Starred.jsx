import { useStarredShow } from '../lib/useStarred';
import { useQuery } from '@tanstack/react-query';
import { getShowByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/showGrid';

function Starred() {
  const [starredShow] = useStarredShow();
  const { data } = useQuery({
    queryKey: ['starredShow', starredShow],
    queryFn:  async() => {
      return  getShowByIds(starredShow).then(result =>
        result.map(show => ({ show }))
      );
    },
  });

  return (
    <div>
      {data ? (
        <div>
          <ShowGrid shows={data}></ShowGrid>
        </div>
      ) : (
        <>No show</>
      )}
    </div>
  );
}

export default Starred;
