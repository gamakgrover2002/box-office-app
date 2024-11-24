import ShowCard from './showCard';
import noImage from '../../lib/not-found-image.png';
function ShowGrid({ shows }) {
  return (
    <div>
      {shows.map(show => (
        <div key={show.show.id}>
          <ShowCard
            name={show.show.name}
            image={show.show.image ? show.show.image.medium : noImage}
            summary={show.show.summary}
            id={show.show.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowGrid;
