import ActorsCard from './actorCrd';
import noImage from '../../lib/not-found-image.png';
import { Link } from 'react-router-dom';
function ActorsGrid({ actors }) {
  return (
    <div>
      {actors.map(actor => {
        return (
          <div key={actor.person.id}>
            <ActorsCard
              name={actor.person.name}
              image={actor.person.image ? actor.person.image.medium : noImage}
            />
            <div>
              <Link to="/">Read More</Link>
              <button type="button">Star Me</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActorsGrid;
