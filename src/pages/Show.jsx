import { useParams } from 'react-router-dom';

function Show() {
  const params = useParams();
  console.log(params);
  return <div>{params.showId}</div>;
}

export default Show;
