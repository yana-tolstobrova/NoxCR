import { useState } from "react"
import search from "../assets/search.svg"
// import { Link } from "react-router-dom"


function Search() {
    const [isInputVisible, setInputVisible] = useState(false);
  
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
          <input
            type="text"
            className="border rounded-lg p-2 absolute top-0 right-0 mt-10"
            placeholder="Buscar..."
          />
        )}
      </div>
    );
  }
  
  export default Search;