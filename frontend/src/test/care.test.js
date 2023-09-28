import React from 'react';
import { render, screen } from '@testing-library/react';
import Care from '../components/Care';
import careData from '../data/dataCareProducts';

test('renderiza correctamente la lista de cuidados', () => {
  render(<Care />);

  const careComponent = screen.getByTestId('care-component');
  expect(careComponent).toBeInTheDocument();

  careData.forEach((care, index) => {
    const careItem = screen.getByTestId(`care-item-${index}`);
    expect(careItem).toBeInTheDocument();

    const description = screen.getByText(care.description);
    expect(description).toBeInTheDocument();
  });
});


