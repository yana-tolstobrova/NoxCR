import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

describe('Footer', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('renders the component without errors', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    expect(screen.getByAltText('icono Facebook')).toBeInTheDocument();
    expect(screen.getByAltText('icono Instagram')).toBeInTheDocument();
    expect(screen.getByAltText('icono TikTok')).toBeInTheDocument();
    expect(screen.getByAltText('icono Whatsapp')).toBeInTheDocument();
  });

  it('opens social media links in new tabs', () => {
    const facebookLink = screen.getByAltText('icono Facebook').closest('a');
    expect(facebookLink).toHaveAttribute('target', '_blank');

    const instagramLink = screen.getByAltText('icono Instagram').closest('a');
    expect(instagramLink).toHaveAttribute('target', '_blank');

    const tiktokLink = screen.getByAltText('icono TikTok').closest('a');
    expect(tiktokLink).toHaveAttribute('target', '_blank');

    const whatsappLink = screen.getByAltText('icono Whatsapp').closest('a');
    expect(whatsappLink).toHaveAttribute('target', '_blank');
  });
});
