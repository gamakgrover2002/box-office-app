import ShowCard from './showCard';

function ShowGrid({ shows }) {
  console.log(shows);
  return (
    <div>
      {shows.map(show => (
        <div key={show.show.id}>
          <ShowCard
            name={show.show.name}
            image={show.show.image.original}
            summary={show.show.summary}
            id={show.show.id}
          />
        </div>
      ))}
    </div>
  );
}

export default ShowGrid;
