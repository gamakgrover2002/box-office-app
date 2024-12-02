import ActorsCard from './actorCard';

import { Link } from 'react-router-dom';
function ActorsGrid({ actors }) {
  return (
    <div>
      {actors.map(actor => {
        return (
          <div key={actor.person.id}>
            <ActorsCard
              name={actor.person.name}
              image={
                actor.person.image
                  ? actor.person.image.medium
                  : '/public/not-found-image.png'
              }
              deathDate={
                actor.person.deathday ? actor.person.deathday : 'Alive'
              }
              birthDate={
                actor.person.birthday ? actor.person.birthday : 'Not Available'
              }
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
