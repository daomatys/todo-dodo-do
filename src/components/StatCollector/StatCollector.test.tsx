import {
  render,
  screen,
} from '@testing-library/react';
import StatCollector from './StatCollector';

test('renders learn react link', () => {
  render(<StatCollector />);
  const statElement = screen.getByText(/completed/i);
  expect(statElement).toBeInTheDocument();
});
