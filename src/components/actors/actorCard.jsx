function ActorsCard({ name, deathDate, birthDate, image }) {
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <h5>{birthDate}</h5>
      <h6>{deathDate}</h6>
    </div>
  );
}

export default ActorsCard;
