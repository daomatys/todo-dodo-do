import TaskBar from '../TaskBar/TaskBar';
import './ListOfTasks.css';

function ListOfTasks() {
  return (
    <div className="ListOfTasks">
      <TaskBar props={{
        note: 'hello'
      }}/>

    </div>
  );
}

export default ListOfTasks;
