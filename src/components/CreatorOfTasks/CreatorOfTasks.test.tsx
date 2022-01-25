import {
  render,
  screen,
} from '@testing-library/react';
import CreatorOfTasks from './CreatorOfTasks';

test('renders learn react link', () => {
  render(<CreatorOfTasks />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
