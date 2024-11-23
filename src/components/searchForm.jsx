import { useState } from 'react';

function SearchForm({ OnSearch }) {
  const [searchOption, setSearchOption] = useState('shows');
  const [searchStr, setSearchStr] = useState('');

  const onInputChange = e => {
    setSearchStr(e.target.value);
  };

  const onRadioChange = e => {
    setSearchOption(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    OnSearch({ option: searchOption, searchStr });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={searchStr}
          type="text"
          onChange={onInputChange}
          placeholder="Search something..."
        />
        <br />
        <label>
          Shows
          <input
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
          />
        </label>
        <label>
          Actors
          <input
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
