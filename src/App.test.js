import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Marley Spoon', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Marley Spoon/i);
  expect(linkElement).toBeInTheDocument();
});