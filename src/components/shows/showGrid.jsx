import ShowCard from './showCard';
import noImage from '../../lib/not-found-image.png';
import { useReducer } from 'react';

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

function ShowGrid({ shows }) {
  const [staredShow, dispatchStarred] = useReducer(starShowFunction, []);
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
          />
        </div>
      ))}
    </div>
  );
}

export default ShowGrid;
