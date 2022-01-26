import React from 'react';
import ITaskBar from './TaskBar/TaskBar.interface';

const defaultTasks:ITaskBar[] = [
  {
    note: 'Go do first case!'
  },
  {
    note: 'Then finish on last case.'
  },
];

const AppContext = React.createContext(defaultTasks);

export default AppContext;
