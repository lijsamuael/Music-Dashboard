// src/components/SearchBar.tsx
import React, { useState } from 'react';
import styled from '@emotion/styled';

const SearchInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return <SearchInput type="text" placeholder="Search songs..." value={query} onChange={handleSearch} />;
};

export default SearchBar;
