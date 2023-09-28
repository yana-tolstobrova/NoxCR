import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {editProduct} from '../../services/ApiEditProduct'
import { fetchProductDetails } from '../../services/ApiGetProductDetails'

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
    const handleCancel = () => {
        navigate('/admin/products');
    };
    return (
        <div className='py-10 px-10 h-full'>
            <h1 className='font-bold text-2xl text-purple mb-8'>Editar producto</h1>
            <div className="w-2/4 m-auto">
            <p className='font-medium text-xl text-purple mb-4'>Edita el producto</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className="text-lg font-medium">Producto:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Producto'
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Categoría:</label>
                    <select
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
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
                    <label className="text-lg font-medium">Cantidad:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='number'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Precio:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='number'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Colección:</label>
                    <select
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
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
                    <label className="text-lg font-medium">Color:</label>
                    <select
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
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
                    <label className="text-lg font-medium">Imagen:</label>
                    <input
                        className="mb-3 w-full bg-white py-2 mt-1 focus:border-black focus:outline-none"
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        onChange={handleFileInputChange}
                    />
                </div>
                <div>
                    <label className="text-lg font-medium">Descripción:</label>
                    <textarea
                        placeholder='Escribe aquí una breve descripción del producto...'
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        name='detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                </div>
                <button type='submit' className="mb-3 border-black border py-2 bg-black text-white w-full">Guardar Cambios</button>
                <button type='button' onClick={handleCancel} className="bg-white border border-black text-black py-2 w-full">Cancelar</button>
            </form>
            </div>
        </div>
    );
} 

export default EditProduct;
