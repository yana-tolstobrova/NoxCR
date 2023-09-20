import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CreateProduct() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [collection, setCollection] = useState('');
    const [color, setColor] = useState('');
    const [image, setImage] = useState(null);
    const [detail, setDetail] = useState(''); 
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('collection', collection);
        formData.append('color', color);
        formData.append('image', image); 
        formData.append('detail', detail);

        axios.post('http://localhost:8000/api/products', formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data", 
              "Accept": "application/json",
            },
          })
            .then((response) => {
                if (response.status === 200) {
                    navigate('/admin/products');
                } else {
                    console.error('Failed to create product.');
                }
            })
            .catch((error) => {
                console.error('Error creating product:', error);
            });
    };

    return (
        <div className=''>
            <h1>Añadir producto nuevo</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
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
                        required
                    />
                </div>
                <div>
                    <label>Precio:</label>
                    <input
                        type='number'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
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
                    onChange={(e) => setImage(e.target.files[0])}  
                    required/>  
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea
                        name='detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        required
                    ></textarea>
                </div>
                <button type='submit'>Añadir Producto</button>
            </form>
        </div>
    );
}

export default CreateProduct;
