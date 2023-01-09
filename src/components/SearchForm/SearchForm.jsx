import { useState } from 'react';

export const SearchForm = ({onSearchSubmit}) => {
  const [searchValue, setSearchValue] = useState('');
  
  const inputChange = event => {
    setSearchValue(event.target.value);
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    if (searchValue === '') {
      alert('Please type your request');
    }
    onSearchSubmit(searchValue);
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            id="search"
            type="text"
            placeholder="query"
            onChange={inputChange}
          />
        </label>
        <button type="submit">search</button>
      </form>
    </>
  );
};
