import { useState } from 'react';
import { searchCast, searchShows } from '../api/tvmaze';

function Home() {
  const [searchStr, setSearchStr] = useState('');
  const [data, setData] = useState(null);
  const [searchOption, setsSearchOption] = useState('shows');
  const OnInputChange = e => {
    setSearchStr(e.target.value);
  };

  const OnSearch = async e => {
    e.preventDefault();
    if (searchOption == 'shows') {
      const result = await searchShows(searchStr);
      setData(result);
    } else {
      const result = await searchCast(searchStr);
      setData(result);
    }
  };
  const onRadioChange = e => {
    setsSearchOption(e.target.value);
  };

  const renderData = () => {
    if (data) {
      return data[0].show
        ? data.map(show => {
            return (
              <div key={show.show.id}>
                <h3>{show.show.name}</h3>
              </div>
            );
          })
        : data.map(cast => {
            return (
              <div key={cast.person.id}>
                <h3>{cast.person.name}</h3>
              </div>
            );
          });
    } else {
      return <p>No results found.</p>;
    }
  };

  return (
    <div>
      <form onSubmit={OnSearch}>
        <input value={searchStr} type="text" onChange={OnInputChange} />
        <br />
        <label>
          Shows
          <input
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
          />
        </label>
        <label>
          Actors
          <input
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
