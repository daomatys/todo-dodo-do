import './CreatorOfTasks.css';
import {
  Button,
  Input
} from 'antd';

import {
  PlusOutlined,
  DoubleRightOutlined
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
          icon={<DoubleRightOutlined />}
          onClick={handleInvokerClick}
        />
      </div>
      <div className="CreatorOfTasks__EjectorContent">
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 32px)' }}
            placeholder="Whatcha gonna achieve?"
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAcceptorClick}
          />
        </Input.Group>
      </div>
    </div>
  );
}

export default CreatorOfTasks;
