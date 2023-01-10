import { useState } from 'react';
import { Form, Button, Input } from './SearchForm.styled';
export const SearchForm = ({ value, onSearchSubmit }) => {
  const [searchValue, setSearchValue] = useState(value ?? '');

  const inputChange = event => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSearchSubmit(searchValue);
    if (searchValue === '') {
      alert('Please type your request');
    }
    event.target.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Input type="text" onChange={inputChange} value={searchValue} />
      </label>
      <Button type="submit">search</Button>
    </Form>
  );
};
