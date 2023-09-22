import {render, screen} from '@testing-library/react';
import { TwLink } from '../components/TwLink';

test('renderiza el componente TwLink correctamente', () => {
  const props = {
    href: 'https://ejemplo.com',
  };

  render(<TwLink {...props}>Enlace de ejemplo</TwLink>);

  const linkElement = screen.getByText('Enlace de ejemplo');
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute('href', 'https://ejemplo.com');

});