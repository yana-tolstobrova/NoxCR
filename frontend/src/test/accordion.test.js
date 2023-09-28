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

test('renderiza el componente Accordion correctamente', () => {
  render(
    <Accordion
      accordionItems={accordionItems}
      showDownloadLink={true}
    />
  );

  expect(screen.getByText('Preguntas frecuentes')).toBeInTheDocument();

  accordionItems.forEach((item) => {
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.queryByText(item.content)).not.toBeInTheDocument();
  });

  expect(screen.getByText('Descargar PDF')).toBeInTheDocument();
});

test('abre y cierra los elementos del acordeón al hacer clic', () => {
  render(
    <Accordion
      accordionItems={accordionItems}
      showDownloadLink={true}
    />
  );

  fireEvent.click(screen.getByText('Pregunta 1'));
  expect(screen.getByText('Respuesta 1')).toBeInTheDocument();

  fireEvent.click(screen.getByText('Pregunta 1'));
  expect(screen.queryByText('Respuesta 1')).not.toBeInTheDocument();
});
