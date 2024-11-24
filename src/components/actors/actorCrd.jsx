function ActorsCard({ name, country, deathData, birthDate, image }) {
  console.log(image);
  return (
    <div>
      <img src={image} alt={name} />
      <h1>{name}</h1>
    </div>
  );
}

export default ActorsCard;
