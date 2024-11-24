import { Link } from 'react-router-dom';
function showCard({ name, image, summary }) {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '') + '...'
    : 'No description';
  console.log(summaryStripped);
  return (
    <div>
      <img width={200} height={300} src={image} alt={name} />
      <h1>{name}</h1>
      <>{summaryStripped}</>
      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
}

export default showCard;
