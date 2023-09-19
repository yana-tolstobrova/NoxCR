import React, { useState } from 'react';
import SearchCard from '../components/Search';

export default function Busqueda() {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<>
			<SearchCard searchTerm={searchTerm}/>
		</>
	);
}