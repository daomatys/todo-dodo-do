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
    const fixedInputValue = inputValue.trim();

    if (fixedInputValue.length > 0) {
      setTasksCount(tasksCount + 1);
      setTasks([
        ...tasks,
        {
          id: `task-${tasksCount + 1}`,
          note: inputValue,
        },
      ]);
    }
    setInputValue('');
  };

  return (
    <div className="CreatorOfTasks">
      <Form
        style={{ width: '100%' }}
        onFinish={createNewTask}
        autoComplete="off"
      >
        <Input.Group compact>
          <Input
            style={{ width: 'calc(100% - 32px)', margin: 0 }}
            placeholder="Whatcha gonna achieve?"
            value={inputValue}
            onChange={({ target }) => setInputValue(target.value)}
          />
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
