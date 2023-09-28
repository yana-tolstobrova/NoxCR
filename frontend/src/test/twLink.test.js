import { render, screen } from '@testing-library/react';
import { TwLink } from '../components/TwLink';

const MockLink = ({ to, ...rest }) => <a href={to} {...rest} />;

test('renderiza el componente TwLink correctamente', () => {
  const props = {
    href: 'https://ejemplo.com',
    as: 'anchor', 
  };

  render(
    <TwLink {...props}>Enlace de ejemplo</TwLink>
  );

  const linkElement = screen.getByText('Enlace de ejemplo');
  expect(linkElement).toBeInTheDocument();

  expect(linkElement).toHaveAttribute('href', 'https://ejemplo.com');
});
