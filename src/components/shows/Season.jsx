function Season({ season }) {
  return (
    <div>
      {season.map(e => {
        return (
          <div key={e.id}>
            Season {e.number}: {e.premiereDate || 'Running'}{' '}
            {e.endDate ? `-${e.endDate}` : ''}
          </div>
        );
      })}
    </div>
  );
}

export default Season;
