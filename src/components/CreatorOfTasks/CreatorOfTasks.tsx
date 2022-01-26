import './CreatorOfTasks.css';
import {
  Button,
  Input,
} from 'antd';

import {
  PlusOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

import React, {
  useContext
} from 'react';

import AppContext from '../App.context';

function CreatorOfTasks() {
  const {
    tasks,
    tasksCount
    setTasks,
    setTasksCount
  } = useContext(AppContext);

  const handleInvokerClick = () => {
    // invoke the damned ejector
  }
  
  const createNewTask = () => {
    setTasks([
      ...tasks,
      {
        note: '1'
      }
    ]);
    setTasksCount(tasksCount + 1);
  }
  
  const createNewTaskOnEnterPressed = ({ key }: {key:string}) => {
    if (key === 'Enter') {
      createNewTask();
    }
  }

  return (
    <div className="CreatorOfTasks">
      <div className="CreatorOfTasks__EjectorInvoker">
        <Button
          type="primary"
          icon={<DoubleRightOutlined />}
          onClick={handleInvokerClick}
        />
      </div>
      <div className="CreatorOfTasks__EjectorContent">
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 32px)' }}
            placeholder="Whatcha gonna achieve?"
            onKeyPress={createNewTaskOnEnterPressed}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={createNewTask}
          />
        </Input.Group>
      </div>
    </div>
  );
}

export default CreatorOfTasks;
