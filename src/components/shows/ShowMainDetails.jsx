function ShowMainDetails({ name, genre, image, rating, summary }) {
  console.log(name);
  return (
    <div>
      <h2>{name}</h2>
      <img src={image || 'default-placeholder.png'} alt={`${name} poster`} />
      <p>Genre: {genre?.join(', ') || 'N/A'}</p>
      <p>Rating: {rating || 'N/A'}</p>
      <div
        dangerouslySetInnerHTML={{ __html: summary || 'No summary available.' }}
      />
    </div>
  );
}

export default ShowMainDetails;
