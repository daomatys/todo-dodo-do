import './CreatorOfTasks.css';
import {
  Button,
  Input
} from 'antd';

import {
  PlusOutlined
} from '@ant-design/icons';

function handleInvokerClick() {
  //invoke the damned ejector
}

function handleAcceptorClick() {
  //push new list example
}

function CreatorOfTasks() {
  return (
    <div className="CreatorOfTasks">
      <div className="CreatorOfTasks__EjectorInvoker">
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleInvokerClick}
        />
      </div>
      <div className="CreatorOfTasks__EjectorContent">
        <div className="CreatorOfTasks__Input">
          <Input.Group compact>
            <Input
              style={{ width: 'calc(100% - 200px)' }}
              defaultValue="https://ant.design"
            />
            <Button
              type="primary"
              icon={<PlusOutlined />}
              onClick={handleAcceptorClick}
            />
          </Input.Group>
        </div>
      </div>
    </div>
  );
}

export default CreatorOfTasks;
