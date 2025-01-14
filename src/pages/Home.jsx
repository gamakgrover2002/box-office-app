import { useState,useEffect } from 'react';
import { searchCast, searchShows } from '../api/tvmaze';
import SearchForm from '../components/searchForm';
import ShowGrid from '../components/shows/showGrid';
import ActorsGrid from '../components/actors/actorsGrid';
import { useQuery } from '@tanstack/react-query';
import { useSearchStr } from '../lib/useSearchStr';
import styled from "styled-components"

const Button = styled.button`
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

function Home() {
  const [option, setOption] = useState(null);
  const [searchStr,setSearchStr] = useSearchStr()
  const { data, isLoading, isError } = useQuery(
    ['search', option, searchStr],
    () => {
      if (option === 'shows') {
        return searchShows(searchStr);
      } else if (option === 'actors') {
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
    if (!data || data.length === 0) {
      return <p>No results found.</p>;
    }
    if (isLoading) {
      return <p>Loading...</p>;
    }
    return data[0].show ? (
      <ShowGrid shows={data} />
    ) : (
      <ActorsGrid actors={data} />
    );
  };
  useEffect(()=>{
    const searchStr = sessionStorage.getItem("searctStr");
    if(searchStr){
      setOption(null);
      setSearchStr(searchStr);
    }
  },[])
  return (
    <div>
      <SearchForm value={searchStr} OnSearch={OnSearch} />
      <div>{renderData()}</div>
    </div>
  );
}

export default Home;
