import { useState } from 'react';
import { searchCast, searchShows } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
import ShowGrid from '../components/shows/showGrid';
import ActorsGrid from '../components/actors/actorsGrid';
import { useQuery } from '@tanstack/react-query';

function Home() {
  const [option, setOption] = useState(null);
  const [searchStr, setSearchStr] = useState('');

  const { data, isLoading, isError } = useQuery(
    ['search', option, searchStr],
    () => {
      if (option === 'shows') {
        return searchShows(searchStr);
      } else if (option === 'cast') {
        return searchCast(searchStr);
      }
    },
    {
      enabled: !!option && !!searchStr,
    }
  );

  const OnSearch = ({ option, searchStr }) => {
    setOption(option);
    setSearchStr(searchStr);
  };

  const renderData = () => {
    if (isError) {
      return <p>Something went wrong. Please try again.</p>;
    }
    if (!data) {
      return <p></p>;
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
