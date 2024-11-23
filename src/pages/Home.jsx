import { useState } from 'react';
import { searchCast, searchShows } from '../api/tvmaze';
import SearchForm from '../components/searchForm';

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
    if (!data || data.length === 0) {
      return <p>No results found.</p>;
    }

    return data[0].show
      ? data.map(show => (
          <div key={show.show.id}>
            <h3>{show.show.name}</h3>
          </div>
        ))
      : data.map(cast => (
          <div key={cast.person.id}>
            <h3>{cast.person.name}</h3>
          </div>
        ));
  };

  return (
    <div>
      <SearchForm OnSearch={OnSearch} />
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
