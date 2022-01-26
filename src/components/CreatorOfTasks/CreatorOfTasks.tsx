import './CreatorOfTasks.css';
import {
  Button,
  Input,
  Form,
} from 'antd';

import {
  PlusOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';

import {
  useContext,
  useState,
} from 'react';

import AppContext from '../App.context';

function CreatorOfTasks() {
  const {
    tasks,
    tasksCount,
    setTasks,
    setTasksCount,
  } = useContext(AppContext);

  const [inputValue, setInputValue] = useState('');

  const handleInvokerClick = () => {
    // invoke the damned ejector
  };

  const createNewTask = () => {
    if (inputValue.length > 0) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          note: inputValue,
          done: false,
        },
      ]);
      setTasksCount(tasksCount + 1);
      setInputValue('');
    }
  };

  const createNewTaskOnEnterPressed = ({ key }: {key:string}) => {
    if (key === 'Enter') {
      createNewTask();
    }
  };

  const onFinishFailed = () => {

  };

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
          style={{ width: '100%' }}
          onFinish={createNewTask}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Input.Group compact>
            <Form.Item
              rules={[
                { required: true, len: 20, type: 'string' },
              ]}
            >
              <Input
                value={inputValue}
                style={{ width: '100%' }}
                placeholder="Whatcha gonna achieve?"
                onKeyPress={createNewTaskOnEnterPressed}
                onChange={({ target }) => setInputValue(target.value)}
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
