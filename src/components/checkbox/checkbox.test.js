import { render, screen } from '@testing-library/react';
import Checkbox from './checkbox';

test('renders learn react link', () => {
  render(<Checkbox />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
