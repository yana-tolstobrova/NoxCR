import React, { useState, useEffect } from 'react';

import Card from '../components/Card';
import { Link } from 'react-router-dom';
import {getFavorites} from "../services/ApiFavoritesService";


function FavoritesPage() {

    const [favoriteProducts, setFavoriteProducts] = useState(4);




  
  return (

    <div>
        
        
        <h1>FAVORITOS</h1>

        <Card limit={favoriteProducts} />
        
        
        
        </div>
  )
}

export default FavoritesPage
