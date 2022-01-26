import React from 'react';
import ITaskBar from './TaskBar/TaskBar.interface';
import DEFAULTS from './App.defaults';

interface IAppContext {
  tasks: ITaskBar[],
  tasksCount: number,
  setTasks: (alpha:ITaskBar[]) => void,
  setTasksCount: (beta:number) => void,
}

const alpha = DEFAULTS.tasks;
const beta = DEFAULTS.count;

const DefaultAppContext:IAppContext = {
  tasks: alpha,
  tasksCount: beta,
  setTasks: (alpha) => { return },
  setTasksCount: (beta) => { return },
}

const AppContext = React.createContext<IAppContext>(DefaultAppContext);

export default AppContext;
