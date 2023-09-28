import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Para usar expect.extend

import OrderQuestionsModal from '../components/OrderQuestionsModal';

// Extendemos expect para usar toBeInTheDocument con un alias más corto
expect.extend({
  toBeInDoc: (received) => {
    const pass = received instanceof HTMLElement && screen.getByTestId(received.dataset.testid);
    if (pass) {
      return {
        message: () => `expected element not to be in the document`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected element to be in the document`,
        pass: false,
      };
    }
  },
});

describe('OrderQuestionsModal', () => {
  const handleCloseModal = jest.fn();
  const handleContinueToOrder = jest.fn();
  const questionsAnswered = [];
  const setQuestionsAnswered = jest.fn();

  beforeEach(() => {
    render(
      <OrderQuestionsModal
        showModal={true}
        handleCloseModal={handleCloseModal}
        handleContinueToOrder={handleContinueToOrder}
        questionsAnswered={questionsAnswered}
        setQuestionsAnswered={setQuestionsAnswered}
      />
    );
  });

  it('renders modal with important questions', () => {
    // Verificamos si el modal se encuentra en el documento
    expect(screen.getByTestId('order-questions-modal')).toBeInTheDocument();

    // Verificamos si las preguntas importantes se encuentran en el documento
    expect(screen.getByText('¿Ya has usado Lentes de contacto anteriormente?')).toBeInTheDocument();
    expect(screen.getByText('¿Conoces los cuidados, precauciones y limpieza de tus lentes de contacto?')).toBeInTheDocument();
    expect(screen.getByText('¿Cuentas con la solución multipropósito para desinfectarlos adecuadamente?')).toBeInTheDocument();

    // Verificamos si el botón "Continuar" se encuentra en el documento
    expect(screen.getByText('Continuar')).toBeInTheDocument();
  });

  it('calls handleContinueToOrder when "Continuar" button is clicked', () => {
    // Simulamos hacer clic en el botón "Continuar"
    fireEvent.click(screen.getByText('Continuar'));

    // Verificamos si la función handleContinueToOrder fue llamada
    expect(handleContinueToOrder).toHaveBeenCalled();
  });
});
