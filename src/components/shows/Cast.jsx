function Cast({ cast }) {
  return (
    <div>
      {cast.map((cast, index) => {
        return (
          <div key={index}>
            <img
              src={
                cast.person.image.medium
                  ? cast.person.image.medium
                  : '/not-found-image.png'
              }
              alt={cast.person.name}
            />
            {cast.person.name}/{cast.character.name}
          </div>
        );
      })}
    </div>
  );
}

export default Cast;
