function ShowGrid({ shows }) {
  return (
    <div>
      {shows.map(show => {
        return <div key={show.show.id}>{show.show.name}</div>;
      })}
    </div>
  );
}

export default ShowGrid;
