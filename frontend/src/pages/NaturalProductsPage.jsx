import React from 'react';
import Card from '../components/Card';

function NaturalProductsPage() {
  return (
    <div className="mx-8">
      <h1 className="text-center mb-8 mt-4 text-2xl ml-4 font-bold"style={{ color: "#3C2046" }}>Productos de la Colección Natural</h1>
      <Card collection="Natural" /> 
    </div>
  );
}

export default NaturalProductsPage;