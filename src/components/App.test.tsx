import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const statElement = screen.getByText(/tasks were completed/i);
  expect(statElement).toBeInTheDocument();
});
