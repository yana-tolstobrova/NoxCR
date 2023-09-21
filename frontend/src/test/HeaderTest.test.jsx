// 

import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Si estás utilizando <Link>
import { Header } from '../components/Header'; // Importa tu componente Header

describe('Header Component', () => {
  it('debe renderizar el componente sin errores', () => {
    // Renderiza el componente dentro de un MemoryRouter si estás utilizando <Link>
    const { getByAltText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Asegúrate de que el elemento de imagen (el logo) esté presente
    const logoElement = getByAltText('Logo');
    expect(logoElement).toBeInTheDocument();
  });

  // Agrega más pruebas según sea necesario
});