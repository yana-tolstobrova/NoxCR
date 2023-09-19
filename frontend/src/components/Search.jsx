import React, { useState } from 'react';
import searchService from '../services/searchService'; // Importa el servicio de búsqueda
import search from '../assets/search.svg';

function Search() {
  const [isInputVisible, setInputVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const toggleInput = () => {
    setInputVisible(!isInputVisible);
  };

  const handleMouseEnter = () => {
    if (!isInputVisible) {
      setInputVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isInputVisible) {
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
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={search}
        alt="icon-search"
        className="cursor-pointer h-5 px-3"
        onClick={toggleInput}
      />
      {isInputVisible && (
        <div>
          <form onSubmit={handleSearch}>
          <input
            type="text"
            className="border rounded-lg p-2 absolute top-0 right-0 mt-10"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button onClick={handleSearch}>Buscar</button>
          </form>
          {/* //hay que pasarlo al otro componente */}
          {searchResults.length > 0 && (
            <div>
              <h2>Resultados de la búsqueda:</h2>
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </div>
            // hata aqui
          )}
        </div>
      )}
    </div>
  );
}

export default Search;