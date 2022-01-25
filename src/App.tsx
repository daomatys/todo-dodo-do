import TaskBar from './components/task-bar/task-bar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TaskBar />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
