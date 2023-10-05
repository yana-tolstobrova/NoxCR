import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordion from '../components/Accordion';

const accordionItems = [
  {
    title: 'Pregunta 1',
    content: 'Respuesta 1',
  },
  {
    title: 'Pregunta 2',
    content: 'Respuesta 2',
  },
];

test('renderiza el componente Accordion correctamente', async () => {
  render(
    <Accordion
      accordionItems={accordionItems}
      showDownloadLink={true}
    />
  );

  expect(screen.getByText('Preguntas frecuentes')).toBeInTheDocument();

  accordionItems.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });

  expect(screen.getByText('Descargar PDF')).toBeInTheDocument();
});


test('muestra el enlace de descarga del PDF cuando showDownloadLink es true', () => {
  render(
    <Accordion
      accordionItems={accordionItems}
      showDownloadLink={true}
    />
  );

  const downloadLink = screen.getByText('Descargar PDF');
  expect(downloadLink).toBeInTheDocument();

  expect(downloadLink).toHaveAttribute('download', 'cuidados-noxcr.pdf');

  expect(downloadLink).toHaveAttribute('target', '_blank');

  expect(downloadLink).toHaveAttribute('rel', 'noopener noreferrer');
});



