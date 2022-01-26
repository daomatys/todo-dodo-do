import {
  render,
  screen,
} from '@testing-library/react';

import ITaskBar from '../TaskBar/TaskBar.interface';
import ListOfTasks from './ListOfTasks';
import DEFAULT from '../App.defaults';

test('renders learn react link', () => {
  const taskSamples:ITaskBar[] = DEFAULT.tasks;

  render(<ListOfTasks tasks={taskSamples} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
