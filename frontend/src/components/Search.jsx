import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import searchService from '../services/searchService'; // Importa el servicio de búsqueda
import search from '../assets/search.svg';
import whiteSearch from '../assets/whiteSearch.svg';

function Search() {
    const [isInputVisible, setInputVisible] = useState(false);
    const inputRef = useRef(null);
    const navigate = useNavigate();
  
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

    // const handleInputChange = (e) => {
    //     setSearchTerm(e.target.value);
    // };

    const goToSearch = () => {
        const inputValue = inputRef?.current?.value
        if (inputValue && isInputVisible) {
            navigate(`/search?query=${inputValue}`)
        }
    }
    
    const onClickHandler = (e) => {
        e.preventDefault();
        toggleInput();
        goToSearch();
    }

    // const handleSearch = async () => {
    //   try {
    //     const results = await searchService.searchProducts(searchTerm);
    //     setSearchResults(results);
    //   } catch (error) {
    //     console.error('Error en la solicitud de búsqueda:', error);
    //   }
    // };

    // const handleSearch = (e) => {
    //     e.preventDefault();
    //     `/search?query=${searchTerm}`;
    // };

    const onKeyDownHandler = (event) => {
        if(event.key === 'Enter'){
            goToSearch();
        }
    }
  
    return (
      <div
        className="flex items-center relative w-48"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="search-container" 
      >
        {isInputVisible && (
          <input
            ref={inputRef}
            type="text"
            className="border rounded-sm py-2 pr-7 pl-2 w-48"
            placeholder="Buscar producto..."
            // onChange={handleInputChange}
            onKeyDown={onKeyDownHandler}
            data-testid="search-input"
          />
          )}
          <img
            src={search}
            alt="icon-search"
            className="cursor-pointer h-5 px-2 absolute right-0 md:block hidden"
            onClick={onClickHandler}
            data-testid="search-icon" 
          />
          <img
            src={whiteSearch}
            alt="icon-search"
            className="cursor-pointer h-5 px-2 absolute right-0 md:hidden"
            onClick={onClickHandler}
            data-testid="search-icon" 
          />
      </div>
    );
  }
  
  export default Search;