import React from 'react';
import { render, screen } from '@testing-library/react';
import LRDApp from 'LRDApp';

test('renders learn react link', () => {
  render(<LRDApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
