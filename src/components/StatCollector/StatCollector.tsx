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


  if (tasksCount > 0) {
    return (
      <div className="StatCollector">
        <span className="StatCollector__TasksCount_Completed">{completedTasksCount}</span>
        of
        <span className="StatCollector__TasksCount_Overall">{tasksCount}</span>
        tasks were completed
      </div>
    );
  } else {
    return (
      <div className="StatCollector">
        Nothing to do :'(
      </div>
    );
  }

}

export default StatCollector;
