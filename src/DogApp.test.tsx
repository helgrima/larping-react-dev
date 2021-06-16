import React from 'react';
import { render, screen } from '@testing-library/react';
import DogApp from 'DogApp';

test('renders learn react link', () => {
  render(<DogApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
