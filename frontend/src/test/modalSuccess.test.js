import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SuccessModal from '../components/ModalSuccess';

describe('SuccessModal', () => {
  it('should render modal with title and button text', () => {
    const showModal = true;
    const handleCloseModal = jest.fn(); 
    const title = 'Success Title';
    const buttonText = 'Close';

    render(
      <SuccessModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title={title}
        text={buttonText}
      />
    );

    const modal = screen.getByTestId('success-modal');
    expect(modal).toBeInTheDocument();

    const modalTitle = screen.getByText(title);
    expect(modalTitle).toBeInTheDocument();

    const modalButton = screen.getByText(buttonText);
    expect(modalButton).toBeInTheDocument();

    fireEvent.click(modalButton);

    expect(handleCloseModal).toHaveBeenCalledTimes(1);
  });

  it('should not render modal when showModal is false', () => {
    const showModal = false;
    const handleCloseModal = jest.fn();
    const title = 'Success Title';
    const buttonText = 'Close';

    render(
      <SuccessModal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        title={title}
        text={buttonText}
      />
    );

    const modal = screen.queryByTestId('success-modal');
    expect(modal).not.toBeInTheDocument();
  });
});
