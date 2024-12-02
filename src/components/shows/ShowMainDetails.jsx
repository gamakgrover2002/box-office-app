function ShowMainDetails({ name, genre, image, rating, summary }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={image || 'default-placeholder.png'} alt={`${name} poster`} />
      <p>
        Genre:{' '}
        {genre.map(e => {
          return <div key={e}>{e}</div>;
        })}
      </p>
      <p>Rating: {rating || 'N/A'}</p>
      <div
        dangerouslySetInnerHTML={{ __html: summary || 'No summary available.' }}
      />
    </div>
  );
}

export default ShowMainDetails;
