import React from 'react';

function ActorsGrid({ actors }) {
  return (
    <div>
      {actors.map(actor => {
        return <div key={actor.person.id}>{actor.person.name}</div>;
      })}
    </div>
  );
}

export default ActorsGrid;
