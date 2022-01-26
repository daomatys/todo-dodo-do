import { render, screen } from '@testing-library/react';
import TaskBar from './TaskBar';

test('renders learn react link', () => {
  render(<TaskBar
    id={143}
    note="text"
    done={false}
  />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
