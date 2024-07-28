"use client"
import { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';

const Search = () => {
  const [data, setData] = useState(null);
  const [type, setType] = useState('domain');
  const [error, setError] = useState('');

  const handleSearch = async (domain: string, type: string) => {
    setError('');
    setData(null);

    try {
      const response = await axios.post('/api/domaininfo', { domain, type });
      setData(response.data);
      setType(type);
    } catch (err) {
      setError('Failed to fetch domain information');
    }
  };

  return (
    <div className='w-full'>
      <SearchBar  onSearch={handleSearch} />
      <SearchResult data={data} type={type} error={error} />
    </div>
  );
};

export default Search;
