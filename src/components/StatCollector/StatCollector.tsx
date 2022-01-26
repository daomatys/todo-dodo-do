import {
  useContext
} from 'react';

import AppContext from '../App.context';
import './StatCollector.css';

function StatCollector() {
  const {
    tasksCount,
    completedTasksCount
  } = useContext(AppContext);

  return (
    <div className="StatCollector">
      <span className="StatCollector__TasksCount_Completed">{completedTasksCount}</span>
      of
      <span className="StatCollector__TasksCount_Overall">{tasksCount}</span>
      tasks were completed
    </div>
  );
}

export default StatCollector;
