import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from '../assets/Logo.svg'
import '@testing-library/jest-dom/extend-expect';
import { Header } from '../components/Header';

describe('Component Header', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  test('should render the Logo with alt text "Logo"', () => {
    const imgElement = screen.getByAltText("Logo");
    expect(imgElement).toBeInTheDocument();
  });

  test('should have the correct alt text for the image', () => {
    const imgElement = screen.getByRole('img', { className: "h-24 w-48" });
    expect(imgElement).toHaveAttribute('alt', 'Logo');
  });
});