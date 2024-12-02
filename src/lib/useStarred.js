import { useEffect, useReducer } from 'react';
export const useStarred = (reducer, initialState, localKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const value = localStorage.getItem(localKey);
    return value ? JSON.parse(value) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(state));
    console.log(state);
  }, [localKey, initialState, state]);
  return [state, dispatch];
};
