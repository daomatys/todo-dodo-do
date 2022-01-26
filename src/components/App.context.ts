import React from 'react';
import ITaskBar from './TaskBar/TaskBar.interface';

interface ITaskFunction {
  (a:ITaskBar[]):void,
}

interface ICountFunction {
  (x:number): void,
}

interface IAppContext {
  tasks: ITaskBar[],
  setTasks: ITaskFunction,

  tasksCount: number,
  setTasksCount: ICountFunction,

  completedTasksCount: number,
  setCompletedTasksCount: ICountFunction,
}

const AppContext = React.createContext<IAppContext>({} as IAppContext);

export default AppContext;
