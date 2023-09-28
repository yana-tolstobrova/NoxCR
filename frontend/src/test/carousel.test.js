import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '../components/Carousel';

test('renders Carousel component', () => {
  render(<Carousel />);
  const slide1 = screen.getByAltText('Slide 1');
  const slide2 = screen.getByAltText('Slide 2');
  const slide3 = screen.getByAltText('Slide 3');
  const slide4 = screen.getByAltText('Slide 4');
  const leftButton = screen.getByText('<');
  const rightButton = screen.getByText('>');

  expect(slide1).toBeInTheDocument();
  expect(slide2).toBeInTheDocument();
  expect(slide3).toBeInTheDocument();
  expect(slide4).toBeInTheDocument();
  expect(leftButton).toBeInTheDocument();
  expect(rightButton).toBeInTheDocument();
});

