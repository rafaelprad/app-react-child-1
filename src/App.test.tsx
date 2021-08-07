import React from 'react';
import { render, screen } from '@testing-library/react';
import AppChild1 from './App';

test('renders learn react link', () => {
  render(<AppChild1 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
