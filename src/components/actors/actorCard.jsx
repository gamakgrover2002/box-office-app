import { SearchCard, SearchImgWrapper } from '../common/SearchCard';
function ActorsCard({ name, deathDate, birthDate, image }) {
  return (
    <SearchCard>
      <SearchImgWrapper>
      <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>{name}</h1>
      <h5>{birthDate}</h5>
      <h6>{deathDate}</h6>
    </SearchCard>
  );
}

export default ActorsCard;
