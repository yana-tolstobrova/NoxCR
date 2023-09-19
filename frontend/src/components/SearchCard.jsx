import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import { Link } from "react-router-dom";
import infoIcon from "../assets/Info.svg";

const CardsSearch = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = () => {
      if (query) {
        const formattedQuery = query.toLowerCase().replace(/\s+/g, "");
        axios
          .get(
            `http://localhost:8000/api/happy_travel?search=${formattedQuery}`
          )
          .then((response) => {
            const data = response.data;
            setSearchResults(data);
          })
          .catch((error) => {
            console.error("Error fetching search results:", error);
          });
      }
    };

    fetchSearchResults();
  }, [query]);
}

return (
    <div>
      {searchResults.length === 0 ? (
        <p className="not-query">
          No se encontraron destinos con el nombre, ni ubicación de la búsqueda
          realizada: "{query}"
        </p>
      ) : (
        <div className="card">
          {searchResults.length > 0 && (
            <div>
              <h2>Resultados de la búsqueda:</h2>
              <ul>
                {searchResults.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </div>
      )}
        </div>
      )}
      </div>
);
      