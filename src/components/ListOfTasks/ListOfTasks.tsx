import './ListOfTasks.css';
import TaskBar from '../TaskBar/TaskBar';
import ITaskBar from '../TaskBar/TaskBar.interface';

function ListOfTasks({ tasks }: { tasks: ITaskBar[] }) {
  return (
    <div className="ListOfTasks">
      {tasks.map((task) => <TaskBar key={task.id} note={task.note} />)}
    </div>
  );
}

export default ListOfTasks;
