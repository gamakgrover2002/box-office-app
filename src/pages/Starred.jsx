import { useStarredShow } from '../lib/useStarred';
import { useQuery } from '@tanstack/react-query';

function Starred() {
  const [starredShow] = useStarredShow();
  const { data } = useQuery({
    queryKey: ['starredShow', starredShow],
  });
  const [staredShow] = useStarredShow();
  return <div>{staredShow.length}</div>;
}

export default Starred;
