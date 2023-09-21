import React from 'react';
import { render, screen } from '@testing-library/react';
import ShippingModal from '../components/ShippingModal';

describe('ShippingModal', () => {
  it('renderiza el modal cuando showModal es verdadero', () => {
    render(<ShippingModal showModal={true} handleCloseModal={() => {}} />);

    const titleElement = screen.getByText('Envío no incluido');
    expect(titleElement).toBeInTheDocument();

    const closeButtonElement = screen.getByText('Cerrar');
    expect(closeButtonElement).toBeInTheDocument();
  });

  it('no renderiza el modal cuando showModal es falso', () => {
    render(<ShippingModal showModal={false} handleCloseModal={() => {}} />);

    const modalElement = screen.queryByTestId('shipping-modal');
    expect(modalElement).toBeNull();
  });
});
