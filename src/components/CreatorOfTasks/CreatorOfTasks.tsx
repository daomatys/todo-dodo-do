import './CreatorOfTasks.css';
import {
  Button,
  Input,
  Form,
} from 'antd';

import {
  PlusOutlined,
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

  const createNewTask = () => {
    if (inputValue.length > 0) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          note: inputValue,
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
      <Form
        style={{ width: '100%' }}
        onFinish={createNewTask}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Input.Group compact>
          <Form.Item
            style={{ width: 'calc(100% - 32px)', margin: 0 }}
          >
            <Input
              value={inputValue}
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
  );
}

export default CreatorOfTasks;
