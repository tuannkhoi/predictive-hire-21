import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Action
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

  // Expect
  expect(linkElement).toBeInTheDocument();
});
