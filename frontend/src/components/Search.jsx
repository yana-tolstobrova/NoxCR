import React, { useState } from 'react';
import searchService from '../services/searchService'; // Importa el servicio de búsqueda
import search from '../assets/search.svg';

function Search() {
    const [isInputVisible, setInputVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const toggleInput = () => {
        setInputVisible((prevValue) => !prevValue);
    };
  
    const handleMouseEnter = () => {
      if (!isInputVisible) {
        setInputVisible(true);
      }
    };
  
    const handleMouseLeave = () => {
      if (isInputVisible) {
        setInputVisible(false);
      }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
      };
    
      // const handleSearch = async () => {
      //   try {
      //     const results = await searchService.searchProducts(searchTerm);
      //     setSearchResults(results);
      //   } catch (error) {
      //     console.error('Error en la solicitud de búsqueda:', error);
      //   }
      // };
      const handleSearch = (e) => {
        e.preventDefault();
        window.location.href = `/search?query=${searchTerm}`;
      };
  
    return (
      <div
      className="flex items-center relative w-48"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isInputVisible && (
          <input
          type="text"
          className="border rounded-lg py-2 pr-7 pl-2 w-48"
          placeholder="Buscar..."
          />
          )}
          <img
            src={search}
            alt="icon-search"
            className="cursor-pointer h-5 px-2 absolute right-0"
            onClick={toggleInput}
          />
      </div>
    );
  }
  
  export default Search;