import { useStarredShow } from '../lib/useStarred';

function Starred() {
  const [staredShow] = useStarredShow();
  return <div>{staredShow.length}</div>;
}

export default Starred;
