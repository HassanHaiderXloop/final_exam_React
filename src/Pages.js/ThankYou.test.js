import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ThankYou from './ThankYou';
import { MemoryRouter } from 'react-router-dom';

test('renders thank you message and start over button', () => {
  const { getByText } = render(
    <MemoryRouter>
      <ThankYou />
    </MemoryRouter>
  );
  const messageElement = getByText(/thanks you/i);
  expect(messageElement).toBeInTheDocument();
  const startOverButton = getByText(/start over/i);
  expect(startOverButton).toBeInTheDocument();
});
