import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SocialNetwork from '../components/SocialNetwork';

describe('SocialNetwork', () => {
    it('renders the component without errors', () => {
        render(<SocialNetwork />);
        const socialNetworkComponent = screen.getByTestId('social-network-component');
        expect(socialNetworkComponent).toBeInTheDocument();
      });

  it('opens the lightbox when an image is clicked', () => {
    render(<SocialNetwork />);
    const image = screen.getByTestId('gallery-image-0');
    fireEvent.click(image);

    const lightbox = screen.getByTestId('lightbox');
    expect(lightbox).toBeInTheDocument();
  });

  it('closes the lightbox when the close button is clicked', () => {
    render(<SocialNetwork />);
    const image = screen.getByTestId('gallery-image-0');
    fireEvent.click(image);

    const closeButton = screen.getByTestId('close-button');
    fireEvent.click(closeButton);

    const lightbox = screen.queryByTestId('lightbox');
    expect(lightbox).not.toBeInTheDocument();
  });
});
