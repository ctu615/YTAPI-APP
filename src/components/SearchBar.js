import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className='search-bar ui segment'>
      <form onSubmit={onSubmit} action='' className='ui form'>
        <label htmlFor=''>Search for a video:</label>
        <input
          type='text'
          value={term}
          name=''
          id=''
          onChange={event => setTerm(event.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
