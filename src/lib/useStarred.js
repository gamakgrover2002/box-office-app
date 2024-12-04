import { useEffect, useReducer } from 'react';
export const usePersistedReducer = (reducer, initialState, localKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const value = localStorage.getItem(localKey);
    return value ? JSON.parse(value) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(state));
  }, [localKey, initialState, state]);
  return [state, dispatch];
};

const starShowFunction = (currentStarred, action) => {
  switch (action.type) {
    case 'Star':
      return currentStarred.concat(action.showId);
    case 'Unstar':
      return currentStarred.filter(e => e !== action.showId);
    default:
      return currentStarred;
  }
};
export const useStarredShow = () => {
  return usePersistedReducer(starShowFunction, [], 'shows');
};
