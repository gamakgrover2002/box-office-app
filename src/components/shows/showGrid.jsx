import ShowCard from './showCard';
import { usePersistedReducer } from '../../lib/useStarred';

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
            image={
              show.show.image
                ? show.show.image.medium
                : '/public/not-found-image.png'
            }
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
