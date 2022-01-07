import React from 'react';
import { useGlobalContext } from './context';
const SearchForm = () => {
  const { setSearch } = useGlobalContext();
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search Movies</h2>
      <input
        type='text'
        className='form-input'
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
