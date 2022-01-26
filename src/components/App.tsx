import {
  useMemo,
  useState,
} from 'react';

import './App.css';
import ListOfTasks from './ListOfTasks/ListOfTasks';
import CreatorOfTasks from './CreatorOfTasks/CreatorOfTasks';
import AppContext from './App.context';
import DEFAULTS from './App.defaults';
import StatCollector from './StatCollector/StatCollector';

function App() {
  const [tasks, setTasks] = useState(DEFAULTS.tasks);
  const [tasksCount, setTasksCount] = useState(DEFAULTS.count);

  const value = useMemo(() => ({
    tasks,
    tasksCount,
    setTasks,
    setTasksCount,
  }), []);

  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={value}>
          <StatCollector />
          <CreatorOfTasks />
          <ListOfTasks tasks={tasks} />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
