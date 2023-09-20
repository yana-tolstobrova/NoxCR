import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {editProduct} from '../services/ApiEditProduct'
import { fetchProductDetails } from '../services/ApiGetProductDetails'

function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [collection, setCollection] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState(null);
    const [detail, setDetail] = useState('');
    useEffect(() => {
        const fetchDetails = async () => {
          try {
            const product = await fetchProductDetails(id);
            setName(product.name);
            setCategory(product.category);
            setQuantity(product.quantity);
            setPrice(product.price);
            setCollection(product.collection);
            setColor(product.color);
            setDetail(product.detail);
          } catch (error) {
            console.error('Error fetching product details:', error);
          }
        };
      
        fetchDetails();
      }, [id]);

    const handleFileInputChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log('Archivo seleccionado:', selectedFile);
            setImage(selectedFile); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
         const formData = new FormData();
         formData.append('name', name);
         formData.append('category', category);
         formData.append('quantity', quantity);
         formData.append('price', price);
         formData.append('collection', collection);
         formData.append('color', color);
         formData.append('detail', detail);
    try {
        const response = await editProduct(id, formData); 
        setName(response.name);
        setCategory(response.category);
        setQuantity(response.quantity);
        setPrice(response.price);
        setCollection(response.collection);
        setColor(response.color);
        setDetail(response.detail);
        navigate('/admin/products');
      } catch (error) {
        console.error('Error:', error);
      }
    };  

    return (
        <div className=''>
            <h1>Editar producto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Categoría:</label>
                    <select
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    >
                        <option value=''>Selecciona una categoría</option>
                        <option value='Lentes de contacto'>Lentes de contacto</option>
                        <option value='Productos de cuidado'>Productos de cuidado</option>
                        <option value='Accesorios'>Accesorios</option>
                    </select>
                </div>
                <div>
                    <label>Cantidad:</label>
                    <input
                        type='number'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type='number'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label>Colección:</label>
                    <select
                        name='collection'
                        value={collection}
                        onChange={(e) => setCollection(e.target.value)}
                    >
                        <option value=''>Selecciona una colección</option>
                        <option value='Natural'>Natural</option>
                        <option value='Crazy'>Crazy</option>
                        <option value='Sclera'>Sclera</option>
                    </select>
                </div>
                <div>
                    <label>Color:</label>
                    <select
                        name='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    >
                        <option value=''>Selecciona un color</option>
                        <option value='Red'>Rojo</option>
                        <option value='Orange'>Naranja</option>
                        <option value='Yellow'>Amarillo</option>
                        <option value='Blue'>Azul-Celeste</option>
                        <option value='Green'>Verde</option>
                        <option value='Pink'>Rosa</option>
                        <option value='Black'>Negro</option>
                        <option value='Purple'>Morado</option>
                        <option value='Grey'>Gris</option>
                        <option value='White'>Blanco</option>
                        <option value='Naruto'>Naruto</option>
                        <option value='UV Glow'>Brillan en luz negra</option>
                    </select>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileInputChange}
                    />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name='detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                </div>
                <button type='submit'>Guardar Cambios</button>
            </form>
        </div>
    );
} 

export default EditProduct;
