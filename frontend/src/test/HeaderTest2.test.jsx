import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
//import Logo from './Logo';
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

  it('should render the Logo with alt text "Logo"', () => {
    const imgElement = screen.getByAltText("Logo");
    expect(imgElement).toBeInTheDocument();
  });

  it('should have the correct alt text for the image', () => {
    const imgElement = screen.getByRole('img', { className: "h-24 w-48" });
    expect(imgElement).toHaveAttribute('alt', "Logo");
  });
});