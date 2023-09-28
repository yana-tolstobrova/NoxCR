import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import FilterProducts from '../components/FilterProducts';

test('renderiza correctamente los enlaces e imágenes', () => {
  render(
    <Router>
      <FilterProducts />
    </Router>
  );

  const naturalLink = screen.getByRole('link', { name: /natural/i });
  const crazyLink = screen.getByRole('link', { name: /crazy/i });
  const scleraLink = screen.getByRole('link', { name: /sclera/i });

  expect(naturalLink).toBeInTheDocument();
  expect(crazyLink).toBeInTheDocument();
  expect(scleraLink).toBeInTheDocument();

  expect(naturalLink).toHaveAttribute('href', '/products/natural');
  expect(crazyLink).toHaveAttribute('href', '/products/crazy');
  expect(scleraLink).toHaveAttribute('href', '/products/sclera');

  const naturalImage = screen.getByAltText('Natural Products');
  const crazyImage = screen.getByAltText('Crazzy Products');
  const scleraImage = screen.getByAltText('Esclera Products');

  expect(naturalImage).toBeInTheDocument();
  expect(crazyImage).toBeInTheDocument();
  expect(scleraImage).toBeInTheDocument();

  expect(naturalImage).toHaveClass('w-full h-full object-cover');
  expect(crazyImage).toHaveClass('w-full h-full object-cover');
  expect(scleraImage).toHaveClass('w-full h-full object-cover');
});
