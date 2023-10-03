import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/ModalSuccess';
import verification from '../../assets/verification.svg';
import "../../index.css";
import DeleteIcon from '../../assets/deleteIcon.svg';

const fileTypes = ["image/jpeg", "image/png", "image/gif"];

function CreateProduct() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [collection, setCollection] = useState('');
    const [color, setColor] = useState('');
    const [detail, setDetail] = useState(''); 
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);

    const handleDrop = (e) => {
      e.preventDefault();
      const newFiles = e.dataTransfer.files;
      processFiles(newFiles);
    };
  
    const handleDragOver = (e) => {
      e.preventDefault();
    };
  
    const handleFileInputChange = (e) => {
      const newFiles = e.target.files;
      processFiles(newFiles);
    };
  
    const processFiles = (newFiles) => {
        const updatedImages = [...images];
    
        for (let i = 0; i < newFiles.length; i++) {
          if (fileTypes.includes(newFiles[i].type)) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
              updatedImages.push(newFiles[i]);
              setImages(updatedImages);
            };
    
            reader.readAsDataURL(newFiles[i]);
          }
        }
      };
    
      const removeImage = (index) => {
        const updatedImages = [...images];
        updatedImages.splice(index, 1);
        setImages(updatedImages);
      };
    
    const openModal = () => {
        setShowModal(true);
      };
    
    const closeModal = () => {
        setShowModal(false);
        navigate('/admin/products');
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('category', category);
        formData.append('quantity', quantity);
        formData.append('price', price);
        formData.append('collection', collection);
        formData.append('color', color);
        formData.append('detail', detail);

        for (let i = 0; i < images.length; i++) {
            formData.append(`images[${i}]`, images[i]);
        }
        console.log(formData)
        axios.post('http://localhost:8000/api/products', formData, {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data", 
              "Accept": "application/json",
            },
          })
            .then((response) => {
                if (response.status === 200) {
                    openModal();
                } else {
                    console.error('Failed to create product.');
                }
            })
            .catch((error) => {
                console.error('Error creating product:', error);
            });
    };
    const handleCancel = () => {
        navigate('/admin/products');
    };

    return (
        <div className='py-10 px-10 h-full'>
            <h1 className='font-bold text-2xl text-purple mb-8'>Añadir producto nuevo</h1>
            <div className="w-2/4 m-auto">
            <form onSubmit={handleSubmit}>
            <p className='font-medium text-xl text-purple mb-4'>Nuevo producto</p>
                <div>
                    <label className="text-lg font-medium">Producto:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='text'
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Producto'
                        required
                    />
                </div>
                <div >
                    <label className="text-lg font-medium">Categoría:</label>
                    <select
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        name='category'
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        
                    >
                        <option value=''>Selecciona una categoría</option>
                        <option value='Lentes de contacto'>Lentes de contacto</option>
                        <option value='Productos de cuidado'>Productos de cuidado</option>
                        <option value='Accesorios'>Accesorios</option>
                    </select>
                </div>
                <div className='flex'>
                    <div className='w-1/2 pr-4'>
                    <label className="text-lg font-medium">Cantidad:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='number'
                        name='quantity'
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                    </div>
                    <div className='w-1/2 pl-4'>
                    <label className="text-lg font-medium">Precio:</label>
                    <input
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        type='number'
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                    </div>
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
                        className="w-full border border-gray-300 bg-white p-2 mt-1 mb-3 focus:border-black focus:outline-none"
                        name='color'
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        placeholder='Selecciona un color'
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
                <label className="text-lg font-medium">Imagen:</label>
                <div className="App">
                    <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
                        <p>Drop files here</p>
                        <label htmlFor='file'>or click <span className="link">here</span> to select file</label>    
                        <input
                        id='file'
                        className='transparent'
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileInputChange}
                        required
                    />
                    </div>

                    {images.length > 0 ? (
                                <div>
                                    {images.map((image, index) => (
                                        <div key={index} className="image-preview">
                                            <div className='relative'>
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`Image ${index + 1}`}
                                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                                />
                                                <button onClick={() => removeImage(index)}><img src={DeleteIcon} alt='icono de papelera' className='cursor-pointer absolute top-0 right-0'></img></button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <br />
                            )}
                    </div>
                <div>
                    <label className="text-lg font-medium">Descripción:</label>
                    <textarea
                        placeholder='Escribe aquí una breve descripción del producto...'
                        className="mb-3 w-full border border-gray-300 bg-white p-2 mt-1 focus:border-black focus:outline-none"
                        name='detail'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                        required
                        rows='3'
                    ></textarea>
                </div>
                <button type='submit' className="mb-3 border-black border py-2 bg-black text-white w-full">Añadir Producto</button>
                <Modal showModal={showModal} close={closeModal} image={verification} text='Aceptar' title='Se ha agregado correctamente' handleCloseModal={closeModal} />
                <button type='button' onClick={handleCancel} className="bg-white border border-black text-black py-2 w-full">Cancelar</button>
            </form>
            </div>
        </div>
    );
}

export default CreateProduct;
