import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct } from '../../services/ApiProducts'
import { fetchProductDetails } from '../../services/ApiGetProductDetails';
import Modal from '../../components/ModalSuccess';
import verification from '../../assets/verification.svg';
import "../../index.css";
import DeleteIcon from '../../assets/deleteIcon.svg';
import Select from 'react-select';
import { getColorsForProduct, getPhotos, deletePhoto } from '../../services/ApiProducts'; 
import axios from 'axios';

const fileTypes = ["image/jpeg", "image/png", "image/gif"];

function EditProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);
    const [collection, setCollection] = useState('');
    const [detail, setDetail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [images, setImages] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [error, setError] = useState('');
    const [photos, setPhotos]= useState();
    const [filteredImages, setFilteredImages] = useState([]);

    const colorOptions = [
        { value: 'Yellow', label: 'Amarillo' },
        { value: 'Blue', label: 'Azul' },
        { value: 'Sky-Blue', label: 'Azul-Celeste' },
        { value: 'White', label: 'Blanco' },
        { value: 'Grey', label: 'Gris' },
        { value: 'Lilac', label: 'Lila' },
        { value: 'Honey', label: 'Miel' },
        { value: 'Purple', label: 'Morado' },
        { value: 'Orange', label: 'Naranja' },
        { value: 'Black', label: 'Negro' },
        { value: 'Red', label: 'Rojo' },
        { value: 'Pink', label: 'Rosa' },
        { value: 'Green', label: 'Verde' },
        { value: 'Naruto', label: 'Naruto' },
        { value: 'UV-Glow', label: 'Brillan en luz negra' },
    ];
  
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
      
      processFiles(newFiles);console.log(newFiles)
    };
  
    const processFiles = (newFiles) => {
      const updatedImages = [...images];
      
      for (let i = 0; i < newFiles.length; i++) {
        if (fileTypes.includes(newFiles[i].type)) {
          const reader = new FileReader();
          console.log(updatedImages)
          reader.onload = (e) => {
            updatedImages.push(newFiles[i]);
            setImages(updatedImages);
            console.log(images)
          };
  
          reader.readAsDataURL(newFiles[i]);
        }
      }
    };
    console.log(images.length)
    // const removeImage = (index) => {
    //   const updatedImages = [...images];
    //   updatedImages.splice(index, 1);
    //   setImages(updatedImages);
    // };
  
    const openModal = () => {
      setShowModal(true);
    };
  
    const closeModal = () => {
      setShowModal(false);
      navigate('/admin/products');
    };

    useEffect(() => {
      const fetchDetails = async () => {
        try {
          const product = await fetchProductDetails(id);
          const colors = await getColorsForProduct(id);
          const optionColor = colors.map((color) => ({ value: color.name, label: color.name }));
          setName(product.name);
          setCategory(product.category);
          setQuantity(product.quantity);
          setPrice(product.price);
          setCollection(product.collection);
          setDetail(product.detail);
          setSelectedColors(optionColor);
          console.log('initial colors:', optionColor) 
		  const allPhotos = await getPhotos();
		  setPhotos(allPhotos);
          const filteredProductImages = allPhotos.filter((photo) => photo.product_id == id);
          setFilteredImages(filteredProductImages);
          console.log(allPhotos[0].product_id)
          console.log(id)
          console.log(filteredProductImages)
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };
  
      fetchDetails();
    }, [id]);

    const handleDeletePhoto = async (photoId) => {
        try {
          await deletePhoto(photoId);
          console.log('deleted')

        setFilteredImages((prevFilteredImages) => prevFilteredImages.filter((image) => image.id !== photoId));

        } catch (error) {
          console.error('Error deleting photo:', error);
        }
      };
      
    const handleColorChange = (selectedOptions) => {
        setSelectedColors(selectedOptions);
        console.log('selected colors:',selectedOptions)
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (name.trim() === '' || category.trim() === '' || detail.trim() === '') {
        setError('El nombre, la cantidad, y la descripción del producto son obligatorios');
        return;
      }
      if (quantity <= 0) {
        setError('La cantidad debe ser mayor que cero');
        return;
      }
      setError('');
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('category', category);
      formData.append('quantity', quantity);
      formData.append('price', price);
      formData.append('collection', collection);
      formData.append('detail', detail);
      const selectedColorValues = selectedColors.map((color) => color.label);
      formData.append('colors', JSON.stringify(selectedColorValues));
      for (let i = 0; i < images.length; i++) {
      formData.append(`images[${i}]`, images[i]);
      
    } console.log(images)
      console.log(name, category, quantity, price, collection, detail, selectedColorValues, images)
      console.log(id)
      try {
        const response = await editProduct(id, formData);
       console.log(response)
        // setName(response.name);
        // setCategory(response.category);
        // setQuantity(response.quantity);
        // setPrice(response.price);
        // setCollection(response.collection);
        // setSelectedColors(response.colors); 
        // setDetail(response.detail);
        // setImages(response.images)
         openModal();
        // console.log(response)
      } catch (error) {
        console.error('Error:', error)};
    };
  
    const handleCancel = () => {
      navigate('/admin/products');
    };


    return (
        <div className='py-10 px-10 h-full'>
            <h1 className='font-bold text-2xl text-purple mb-8'>Editar producto</h1>
            <div className='h-10 py-2'>{error && <div className="text-red-500 font-xs">{error}</div>}</div>
            <div className="w-2/4 m-auto">
            <p className='font-medium text-xl text-purple mb-4'>Edita el producto</p>
            <form onSubmit={handleSubmit} >
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
                    <Select
                    className="mb-3 mt-1 focus:border-black focus:outline-none"
                    isMulti
                    value={selectedColors}
                    onChange={handleColorChange}
                    options={colorOptions}
                    placeholder='Selecciona uno o más colores'
                    />
                </div>
                 <label className="text-lg font-medium ">Imagen:</label>
                <div className="App mt-1">
                    <div className="drop-area" onDrop={handleDrop} onDragOver={handleDragOver}>
                        <p>Drag & drop los archivos aquí</p>
                        <label htmlFor='file'>o haz clic <span className="link cursor-pointer">aquí</span> para seleccionar unos</label>    
                        <input
                        id='file'
                        className='transparent'
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileInputChange}
                    />
                    </div>
                    {filteredImages.length > 0 ? (
                                <div>
                                    {filteredImages.map((image, id) => (
                                        <div key={id} className="image-preview">
                                            <div className='relative'>
                                                <img
                                                    src={image.url}
                                                    style={{ maxWidth: "100px", maxHeight: "100px" }}
                                                />
                                                <button type="button" onClick={() => handleDeletePhoto(image.id)}><img src={DeleteIcon} alt='icono de papelera' className='cursor-pointer absolute top-0 right-0'></img></button>
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
                        rows='3'
                        value={detail}
                        onChange={(e) => setDetail(e.target.value)}
                    ></textarea>
                </div>
                <button type='submit' className="mb-3 border-black border py-2 bg-black text-white w-full">Guardar Cambios</button>
                <Modal showModal={showModal} close={closeModal} image={verification} text='Aceptar' title='Se ha editado correctamente' handleCloseModal={closeModal} />
                <button type='button' onClick={handleCancel} className="bg-white border border-black text-black py-2 w-full">Cancelar</button>
            </form>
            </div>
        </div>
    );
} 

export default EditProduct;
