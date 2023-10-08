import React, { useEffect, useState } from 'react';
import AddIcon from '../../assets/addIcon.svg';
import EditIcon from '../../assets/editIcon.svg';
import DeleteIcon from '../../assets/deleteIcon.svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/ModalSuccess';
import warning from '../../assets/warning.svg';
import { reverseProducts, deleteProduct, getColorsForProduct } from '../../services/ApiProducts'; 

function ProductList() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;
    const [showModal, setShowModal] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null); 
    const [productColors, setProductColors] = useState({});

    const openModal = (productId) => {
        setShowModal(true);
        setSelectedProductId(productId); 
    };

    const closeModal = () => {
        setShowModal(false);
        setSelectedProductId(null);
    };
    const fetchColorsForProducts = (productsData) => {
        const productColorData = {};
              const colorPromises = productsData.map((product) => {
          return getColorsForProduct(product.id)
            .then((colorsData) => {
              productColorData[product.id] = colorsData;
            })
            .catch((error) => {
              console.error('Error fetching colors:', error);
            });
        });
              Promise.all(colorPromises)
          .then(() => {
            setProductColors({ ...productColorData });
          })
          .catch((error) => {
            console.error('Error fetching colors:', error);
          });
      };
    useEffect(() => {
        reverseProducts()
          .then((productsData) => {
            setProducts(productsData);
            fetchColorsForProducts(productsData);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
          });
      }, []);
      
      
      const handleDeleteProduct = (id) => {
        deleteProduct(id)
          .then((success) => {
            if (success) {
              closeModal();
              setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
            } else {
              console.error('Failed to delete product.');
            }
          })
          .catch((error) => {
            console.error('Error deleting product:', error);
          });
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
            <table className='w-full'>
                <thead>
                    <tr className="text-left h-12">
                        <th></th>
                        <th>Productos</th>
                        <th>Categoría</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Colección</th>
                        <th>Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {currentProducts.map((product, index) => (
                        <tr key={product.id} className='bg-slate-100 h-16'>
                            <td className='pl-2'>{indexOfFirstProduct + index + 1}</td>                            
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.quantity}</td>
                            <td>₡{product.price}</td>
                            <td>{product.collection}</td>
                            <td>
                                {productColors[product.id] ? (
                                productColors[product.id].map((color) => (
                                    <span key={color.id} >{color.name} </span>
                                ))
                                ) : ''}
                            </td>
                            <td>
                                <div className='flex items-center justify-end pr-2'>
                                    <a onClick={() => navigate(`/admin/editProduct/${product.id}`)}><img src={EditIcon} alt='icono de boligrafo' className='cursor-pointer'></img></a>
                                    <a onClick={() => openModal(product.id)}><img src={DeleteIcon} alt='icono de papelera' className='cursor-pointer'></img></a>
                                </div>
                            </td>
                        </tr>
                        
                    ))}
                </tbody>
            </table>
            <Modal showModal={showModal} close={closeModal} image={warning} text='Aceptar' title='¿Estás seguro que quieres eliminar este producto?' handleCloseModal={() => handleDeleteProduct(selectedProductId)} />
            <div className='text-center mt-4 fixed bottom-6 left-[55%]'>
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
