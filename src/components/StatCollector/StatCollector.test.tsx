import {
  render,
  screen,
} from '@testing-library/react';
import StatCollector from './StatCollector';

test('renders learn react link', () => {
  render(<StatCollector />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
