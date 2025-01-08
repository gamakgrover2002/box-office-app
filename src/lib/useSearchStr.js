import { useEffect,  useState } from 'react';
export const usePersistedReducer = ( initialState, sessionKey) => {
  const [searchStr, setSearchStr] = useState(() => {
    const value = sessionStorage.getItem(sessionKey);
    return value ? JSON.parse(value) : '';
  });
  useEffect(() => {
    sessionStorage.setItem(sessionKey, JSON.stringify(searchStr));
  }, [sessionKey, initialState, searchStr]);
  return [searchStr, setSearchStr];
};

export const useSearchStr=()=>{
  return  usePersistedReducer("","searhStr");
}

