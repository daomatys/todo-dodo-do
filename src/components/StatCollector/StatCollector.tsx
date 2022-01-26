import {
  useContext,
} from 'react';

import AppContext from '../App.context';
import './StatCollector.css';

function StatCollector() {
  const {
    tasksCount,
    completedTasksCount,
  } = useContext(AppContext);

  if (tasksCount > 1) {
    return (
      <div className="StatCollector">
        <span className="StatCollector__TasksCount_Completed">{completedTasksCount}</span>
        of
        <span className="StatCollector__TasksCount_Overall">{tasksCount}</span>
        tasks were completed
      </div>
    );
  }
  if (tasksCount < 1) {
    return (
      <div className="StatCollector">
        Nothing to do :&apos;(
      </div>
    );
  }
  return (
    <div className="StatCollector">
      <span className="StatCollector__TasksCount_Overall">1</span>
      task was{ completedTasksCount > 0 ? '' : 'n\'t' } completed
    </div>
  );
}

export default StatCollector;
