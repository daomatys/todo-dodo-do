import './App.css';
import React from 'react';
import ListOfTasks from './components/ListOfTasks/ListOfTasks';
import CreatorOfTasks from './components/CreatorOfTasks/CreatorOfTasks';

const AppContext = React.createContext({});

function useCount() {
  const context = React.useContext(AppContext);
  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppContext.Provider value={{

        }}
        >
          <CreatorOfTasks />
          <ListOfTasks />
        </AppContext.Provider>
      </header>
    </div>
  );
}

export default App;
