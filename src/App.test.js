import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the quote gen title', () => {
  render(<App />);
  const firstHeading = screen.getByText(/quote generator/i);
  expect(firstHeading).toBeInTheDocument();
});
