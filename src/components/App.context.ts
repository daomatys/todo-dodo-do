import React from 'react';
import ITaskBar from './TaskBar/TaskBar.interface';
import DEFAULTS from './App.defaults';

interface IAppContext {
  tasks: ITaskBar[],
  setTasks: (alpha:ITaskBar[]) => void,

  tasksCount: number,
  setTasksCount: (beta:number) => void,

  completedTasksCount: number,
  setCompletedTasksCount: (beta:number) => void,
}

const alpha = DEFAULTS.tasks;
const beta = DEFAULTS.count;

const DefaultAppContext:IAppContext = {
  tasks: alpha,
  tasksCount: beta,
  completedTasksCount: beta,
  setTasks: (alpha) => { return },
  setTasksCount: (beta) => { return },
  setCompletedTasksCount: (beta) => { return },
}

const AppContext = React.createContext<IAppContext>(DefaultAppContext);

export default AppContext;
