import { render, screen } from '@testing-library/react';
import TaskBar from './TaskBar';

test('renders learn react link', () => {
  render(<TaskBar
    id="xxx"
    note="TeStTeXt"
  />);
  const taskBarElement = screen.getByText(/TeStTeXt/i);
  expect(taskBarElement).toBeInTheDocument();
});
