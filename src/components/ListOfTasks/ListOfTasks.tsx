import TaskBar from '../TaskBar/TaskBar';
import './ListOfTasks.css';

function ListOfTasks() {
  return (
    <div className="ListOfTasks">
      <TaskBar
        note="TopTask"
      />
      <TaskBar
        note="MidTask"
      />
      <TaskBar
        note="BotTask"
      />
    </div>
  );
}

export default ListOfTasks;
