import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import { App } from './app';

test('renders the Get started heading', () => {
  render(<App />);
  const heading = screen.getByText(/Get started/i);
  expect(heading).toBeInTheDocument();
});

test('renders the counter button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: /count is/i });
  expect(button).toBeInTheDocument();
});
