import TaskBar from '../TaskBar/TaskBar';
import './ListOfTasks.css';

function ListOfTasks() {
  return (
    <div className="ListOfTasks">
      <TaskBar />
      <TaskBar />
      <TaskBar />
      <TaskBar />
    </div>
  );
}

export default ListOfTasks;
