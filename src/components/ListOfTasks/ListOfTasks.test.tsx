import {
  render,
  screen,
} from '@testing-library/react';
import ITaskBar from '../TaskBar/TaskBar.interface';
import ListOfTasks from './ListOfTasks';
test('renders learn react link', () => {
  const taskSamples:ITaskBar[] = [
    { note: 'x' },
    { note: 'y' },
  ];

  render(<ListOfTasks tasks={taskSamples} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
