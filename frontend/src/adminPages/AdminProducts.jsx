import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddIcon from '../assets/addIcon.svg';
import EditIcon from '../assets/editIcon.svg';
import DeleteIcon from '../assets/deleteIcon.svg';
import { useNavigate } from 'react-router-dom';

function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
  
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
            axios.delete(`http://localhost:8000/api/products/${id}`, {
                withCredentials: true,
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json",
                },
              })
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
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
      };
    
      const indexOfLastProduct = currentPage * productsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
      const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    
      const totalPages = Math.ceil(products.length / productsPerPage);
      const pageNumbers = [];
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    return (
        <div className='py-10 px-10 h-full'>
            <div className='flex items-center justify-between mb-6'>
                 <h1 className='font-bold text-2xl text-purple'>Productos</h1>
                <div className='flex items-center gap-2'>
                    <a href="/admin/createProduct"><img src={AddIcon} alt='icono añadir' className='cursor-pointer'></img></a>
                    <span>Añadir nuevo producto</span>
                </div>
            </div>
           <p className='text-lg mb-6'>Lista de productos</p>
            <table className='w-full'>
                <thead>
                    <tr className="text-left">
                        <th></th>
                        <th>Productos</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Colección</th>
                        <th>Color</th>
                        {/* <th>Descripción</th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product, index) => (
                        <tr key={product.id} className='bg-slate-100 h-16'>
                            <td className='pl-2'>{indexOfFirstProduct + index + 1}</td>                            
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td className="text-center">{product.quantity}</td>
                            <td>₡{product.price}</td>
                            <td>{product.collection}</td>
                            <td>{product.color}</td>
                            {/* <td className='w-28'>{product.detail}</td>  */}
                            <td>
                                <div className='flex items-center justify-end pr-2'>
                                    <a onClick={() => navigate(`/admin/editProduct/${product.id}`)}><img src={EditIcon} alt='icono de boligrafo' className='cursor-pointer'></img></a>
                                    <a onClick={() => deleteProduct(product.id)}><img src={DeleteIcon} alt='icono de papelera' className='cursor-pointer'></img></a>
                                </div>

                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            <div className='text-center mt-4'>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Anterior
                </button>
                {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={`${
                        currentPage === pageNumber ? 'bg-icon-accent' : 'bg-none'
                    } px-3 py-1 mx-2`}
                >
                    {pageNumber}
                </button>
                ))}
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={indexOfLastProduct >= products.length}>
                Siguiente
                </button>
            </div>
        </div>
    );
}

export default ProductList;
