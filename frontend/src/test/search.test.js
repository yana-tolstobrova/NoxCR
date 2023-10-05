import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Search from '../components/Search';

test('renderiza el componente Search correctamente', () => {
  render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );

  const searchContainer = screen.getByTestId('search-container');
  expect(searchContainer).toBeInTheDocument();

  const searchInput = screen.queryByTestId('search-input');
  expect(searchInput).not.toBeInTheDocument();

  fireEvent.mouseEnter(searchContainer);

  const visibleSearchInput = screen.getByTestId('search-input');
  expect(visibleSearchInput).toBeInTheDocument();

  const searchIcons = screen.getAllByTestId('search-icon');

  fireEvent.click(searchIcons[0]);

});
