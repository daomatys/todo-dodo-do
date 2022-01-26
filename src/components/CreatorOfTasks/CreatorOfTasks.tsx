import './CreatorOfTasks.css';
import {
  Button,
  Input,
  Form
} from 'antd';

import {
  PlusOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

import {
  useContext,
} from 'react';

import AppContext from '../App.context';

function CreatorOfTasks() {
  const {
    tasks,
    tasksCount,
    setTasks,
    setTasksCount,
  } = useContext(AppContext);

  const handleInvokerClick = () => {
    // invoke the damned ejector
  };

  const createNewTask = () => {
    setTasks([
      ...tasks,
      {
        note: '1',
      },
    ]);
    setTasksCount(tasksCount + 1);
  };

  const createNewTaskOnEnterPressed = ({ key }: {key:string}) => {
    if (key === 'Enter') {
      createNewTask();
    }
  };

  const onFinishFailed = () => {
    return;
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
        <Form
          onFinish={createNewTask}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input.Group compact>
            <Form.Item
              rules={[
                { required: true, len: 20, type: 'string' }
              ]}
            >
              <Input
                style={{ width: 'calc(100% - 32px)' }}
                placeholder="Whatcha gonna achieve?"
                onKeyPress={createNewTaskOnEnterPressed}
              />
            </Form.Item>
            <Button
              type="primary"
              icon={<PlusOutlined />}
              htmlType="submit"
            />
          </Input.Group>
        </Form>
      </div>
    </div>
  );
}

export default CreatorOfTasks;
