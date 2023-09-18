import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

function ProductList() {
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products',)
        .then((response) => {
            const productsData = response.data; 
            setProducts(productsData);
        })
        .catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, []);

    const deleteProduct = (id) => {
        try {
            axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
                } else {
                    console.error('Failed to delete product.');
                }
            })
            .catch((error) => {
                console.error('Error deleting product:', error);
            });
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <div className=''>
            <h1>Productos</h1>
            <a href="/admin/createProduct">Añadir nuevo producto</a>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Colección</th>
                        <th>Color</th>
                        <th>Descripción</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>${product.price}</td>
                            <td>{product.collection}</td>
                            <td>{product.color}</td>
                            <td>{product.detail}</td>
                            <td>
                                <a onClick={() => navigate(`/admin/editProduct/${product.id}`)}>edit</a>
                                <a onClick={() => deleteProduct(product.id)}>delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
