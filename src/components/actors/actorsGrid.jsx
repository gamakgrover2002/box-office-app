import ActorsCard from './actorCard';
import { FlexGrid } from '../common/FlexGrid';
function ActorsGrid({ actors }) {
  return (
    <FlexGrid>
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
            </div>
          </div>
        );
      })}
    </FlexGrid>
  );
}

export default ActorsGrid;
