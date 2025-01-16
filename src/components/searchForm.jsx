import { useState } from 'react';
import CustomRadio from './CustomRadio';
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
       
          <CustomRadio
          label="shows"
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="shows"
            checked={searchOption === 'shows'}
          />
        
          <CustomRadio
          label="Actors"
            onChange={onRadioChange}
            type="radio"
            name="search-option"
            value="actors"
            checked={searchOption === 'actors'}
          />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
