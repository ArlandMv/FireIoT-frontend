import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../components/Login';

test('button has corrrect initial primary color', () => {
  render(<Login />);
  // find element with a role of button and text of 'Sign In'
  const colorButton = screen.getByRole('button', { name: 'Sign In' });
  // actual test
  expect(colorButton).toHaveStyle({ backgroundColor: 'purple' });
});
