import './App.css';
import React from 'react';
import ListOfTasks from './components/ListOfTasks/ListOfTasks';
import CreatorOfTasks from './components/CreatorOfTasks/CreatorOfTasks';
import ITaskBar from './components/TaskBar/TaskBar.interface';

const AppContext = React.createContext({});
const taskSamples:ITaskBar[] = [
  { note: 'x' },
  { note: 'y' },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider
          value={{

          }}
        >
          <CreatorOfTasks />
          <ListOfTasks
            tasks={taskSamples}
          />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
