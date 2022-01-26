import './CreatorOfTasks.css';
import {
  Button,
  Input,
} from 'antd';

import {
  PlusOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

function handleInvokerClick() {
  // invoke the damned ejector
}

function createNewTask() {
  // there
}

function createNewTaskOnEnterPressed({ key }: {key:string}) {
  if (key === 'Enter') {
    createNewTask();
  }
}

function CreatorOfTasks() {
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
