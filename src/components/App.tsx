import {
  useState
} from 'react';

import './App.css';
import ListOfTasks from './ListOfTasks/ListOfTasks';
import CreatorOfTasks from './CreatorOfTasks/CreatorOfTasks';
import ITaskBar from './TaskBar/TaskBar.interface';
import AppContext from './App.context';

const [tasks, setTasks] = useState(AppContext);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider
          value={[]}
        >
          <CreatorOfTasks />
          <ListOfTasks
            tasks={tasks}
          />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
