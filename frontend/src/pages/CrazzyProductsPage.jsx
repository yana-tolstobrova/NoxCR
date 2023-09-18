import React from 'react';
import Card from '../components/Card';

function CrazzyProductsPage() {
  return (
    <div>
      <h1 className="text-center mb-8 mt-4 text-2xl ml-4 font-bold">Productos de la Colección Crazzy</h1>
      <Card collection="Crazzy" /> {/* Pasa la colección "Crazzy" como prop */}
    </div>
  );
}

export default CrazzyProductsPage;
