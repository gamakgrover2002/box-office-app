import ShowCard from './showCard';
import noImage from '../../lib/not-found-image.png';
import { useReducer } from 'react';
import { useEffect } from 'react';

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
const usePersistedReducer = (reducer, initialState, localKey) => {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const value = localStorage.getItem(localKey);
    return value ? JSON.parse(value) : initial;
  });
  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(state));
  }, [localKey, initialState, state]);
  return [state, dispatch];
};

function ShowGrid({ shows }) {
  const [staredShow, dispatchStarred] = usePersistedReducer(
    starShowFunction,
    [],
    'shows'
  );

  const onStarClick = showId => {
    const isStarred = staredShow.includes(showId);
    if (isStarred) {
      dispatchStarred({ type: 'Unstar', showId });
    } else {
      dispatchStarred({ type: 'Star', showId });
    }
    console.log(staredShow);
  };
  return (
    <div>
      {shows.map(show => (
        <div key={show.show.id}>
          <ShowCard
            name={show.show.name}
            image={show.show.image ? show.show.image.medium : noImage}
            summary={show.show.summary}
            id={show.show.id}
            onStarClick={onStarClick}
            isStarred={staredShow.includes(show.show.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowGrid;
