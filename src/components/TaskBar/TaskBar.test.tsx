import { render, screen } from '@testing-library/react';
import TaskBar from './TaskBar';

test('renders learn react link', () => {
  render(<TaskBar />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
