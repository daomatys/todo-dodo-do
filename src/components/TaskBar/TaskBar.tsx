import './TaskBar.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Button,
} from 'antd';

import {
  DeleteOutlined,
} from '@ant-design/icons';

import {
  useContext
} from 'react';

import AppContext from '../App.context';
import ITaskBar from './TaskBar.interface';

function TaskBar(props:ITaskBar) {
  const {
    tasks,
    setTasks,
    tasksCount,
    setTasksCount,
    completedTasksCount,
    setCompletedTasksCount,
  } = useContext(AppContext);

  const thatTaskBarId = props.id.toString();

  const handleSwitcherChange = (checked:boolean) => {
    const addendum = checked ? 1 : -1 ;

    setCompletedTasksCount( completedTasksCount + addendum )
  }
  
  const handleRemoverClick = () => {
    setTasks(
      tasks.filter( task => task.id.toString() !== thatTaskBarId )
    );
    setTasksCount( tasksCount - 1);
    
    if( props.done ) {
      setCompletedTasksCount( completedTasksCount - 1 );
    }
  }

  return (
    <div className="TaskBar" id={thatTaskBarId}>
      <div className="TaskBar__StateSwitcher">
        <Switch
          checkedChildren="DONE"
          unCheckedChildren="LAZY"
          onChange={handleSwitcherChange}
        />
      </div>
      <div className="TaskBar__Note">
        <span>{props.note}</span>
      </div>
      <div className="TaskBar__Remover">
        <Button
          type="primary"
          icon={<DeleteOutlined />}
          onClick={handleRemoverClick}
        />
      </div>
    </div>
  );
}

export default TaskBar;
