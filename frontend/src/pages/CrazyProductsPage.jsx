import React from 'react';
import Card from '../components/Card';

function CrazyProductsPage() {
  return (
    <div>
      <h1 className="text-center mb-8 mt-4 text-2xl ml-4 font-bold">Productos de la Colección Crazy</h1>
      <Card collection="Crazy" /> 
    </div>
  );
}

export default CrazyProductsPage;
