function showCard({ id, name, image, summary, onStarClick, isStarred }) {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No description';
  return (
    <div>
      <img width={200} height={300} src={image} alt={name} />
      <h1>{name}</h1>
      <>{summaryStripped}</>
      <div>
        <a href={`/show/${id}`} target="_blank" rel="noreferrer">
          Read More
        </a>
        <button
          onClick={() => {
            onStarClick(id);
          }}
          type="button"
        >
          {isStarred ? 'No Star' : 'Star'}
        </button>
      </div>
    </div>
  );
}

export default showCard;
