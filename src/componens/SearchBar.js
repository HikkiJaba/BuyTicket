import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Передаем значение поиска в родительский компонент
  };

  return (
    <input
      type="text"
      placeholder="Поиск по отправлению"
      value={searchTerm}
      onChange={handleSearchChange}
      className='searchBar'
    />
  );
}

export default SearchBar;
