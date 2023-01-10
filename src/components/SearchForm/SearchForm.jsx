import { useState } from 'react';

export const SearchForm = ({value, onSearchSubmit}) => {
  const [searchValue, setSearchValue] = useState('');
  
  const inputChange = event => {
    setSearchValue(event.target.value);
  };
 
  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.value);
    console.log(searchValue);

    onSearchSubmit(searchValue);
    if (searchValue === '') {
      alert('Please type your request');
    }
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            // value={value}
            onChange={inputChange}
          />
        </label>
        <button type="submit" >search</button>
      </form>
    </>
  );
};
