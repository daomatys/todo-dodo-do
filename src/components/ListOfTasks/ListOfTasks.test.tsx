import {
  render,
  screen,
} from '@testing-library/react';
import ListOfTasks from './ListOfTasks';

test('renders learn react link', () => {
  render(<ListOfTasks />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
