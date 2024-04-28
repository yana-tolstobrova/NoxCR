import React, { useState, useEffect } from 'react';
import { cardsProducts, getPhotos } from '../../services/ApiProducts';

export default function AdminPanel() {
	const [products, setProducts]= useState();
	const [photos, setPhotos]= useState();

	useEffect(() => {
		const fetchData = async () => {
		  const allProducts = await cardsProducts();
		  setProducts(allProducts);
		};
		const fetchPhotos = async () => {
			const allPhotos = await getPhotos();
			setPhotos(allPhotos);
		  };
	
		fetchPhotos();
		fetchData();
	  }, []);
	  const getProductPhoto = (productId) => {
        const productPhotos = photos.filter((photo) => photo.product_id === productId);
        if (productPhotos.length > 0) {
            return productPhotos[0].url; 
        }
        return 'No hay ningun foto del producto';
    };

	return (
		<>
		<div className='py-10 px-10 h-full'>
			<h1 className='text-3xl font-bold pb-8'>Panel de Gestión</h1>
			<h2 className='text-2xl font-bold text-slate-700'>Métricas de Ventas Mensual</h2>
			<div className='mt-4 flex gap-6 pb-6'>
				<div className='shadow-xl w-1/3 py-4 px-6'>
					<span className='text-color-icon text-3xl font-bold'>120</span>
					<p className='font-medium mt-2'>Cantidad de los productos vendidos</p>
					<span>Septiembre 2023</span>
				</div>
				<div className='shadow-xl w-1/3 py-4 px-6'>
					<span className='text-color-icon text-3xl font-bold'>₡120000</span>
					<p className='font-medium mt-2'>Beneficio de mes </p>
					<span className='text-slate-600'>Septiembre 2023</span>
				</div>
			</div>
			<h2 className='text-2xl font-bold text-slate-700 pb-6'>Top de ventas</h2>

			<div className="flex gap-4">
			{products &&
				products.slice(0, 5).map((product) => (
				<div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4">
					<div className="w-52 h-89 rounded overflow-hidden shadow-xl">
					<img className="w-52 h-56 object-cover" src={getProductPhoto(product.id)} alt={product.name} />
					<div className="px-4 py-2 h-20">
						<div className="text-l mb-2">{product.name}</div>
						<p className="text-base text-purple">
						₡{product.price}
						</p>
					</div>
					</div>
				</div>
				))}
			</div>
				</div>
		</>
	)
}