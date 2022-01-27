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
  
  const firstCase = screen.getByText(/Go crash the first case/i);
  const lastCase = screen.getByText(/Then finish the last one./i);

  expect(firstCase).toBeInTheDocument();
  expect(lastCase).toBeInTheDocument();
});
