import { useState } from 'react';
import { searchCast, searchShows } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
import ShowGrid from '../components/shows/showGrid';
import ActorsGrid from '../components/actors/actorsGrid';

function Home() {
  const [data, setData] = useState(null);

  const OnSearch = async ({ option, searchStr }) => {
    try {
      const result =
        option === 'shows'
          ? await searchShows(searchStr)
          : await searchCast(searchStr);
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
      setData(null);
    }
  };

  const renderData = () => {
    console.log(data);
    if (!data || data.length === 0) {
      return <p>No results found.</p>;
    }
    return data[0].show ? (
      <ShowGrid shows={data} />
    ) : (
      <ActorsGrid actors={data} />
    );
  };

  return (
    <div>
      <SearchForm OnSearch={OnSearch} />
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
