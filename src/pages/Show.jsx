import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getShowData } from '../api/tvmaze';
function Show() {
  const params = useParams();
  useEffect(() => {
    console.log(params);
    const fetchData = async () => {
      const result = await getShowData(params.showId);
      console.log(result);
    };
    fetchData();
  });
  return <div>{params.showId}</div>;
}

export default Show;
