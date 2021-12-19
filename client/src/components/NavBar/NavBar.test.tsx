import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import NavBar from './NavBar';

test('to called with correct props', () => {
  // Action
  render(
  <MemoryRouter>
    <NavBar />
  </MemoryRouter>,);
  const navLinkElement = screen.getByText('Predictive Hire');

  // Expect
  expect(navLinkElement).toBeCalledWith({to: '/'});
});
