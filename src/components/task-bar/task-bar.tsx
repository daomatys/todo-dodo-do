import './task-bar.css';
import 'antd/dist/antd.css';
import {
  Switch,
  Button,
} from 'antd';
import {
  DeleteOutlined,
} from '@ant-design/icons';

function handleSwitcherChange(checked:boolean) {
  console.log(`switch to ${checked}`);
}

function handleRemoverClick() {
  console.log('clicked');
}

function TaskBar() {
  return (
    <div className="task-bar">
      <div className="task-bar__state-switcher">
        <Switch
          checkedChildren="DONE"
          unCheckedChildren="LAZY"
          onChange={handleSwitcherChange}
        />
      </div>
      <div className="task-bar__note">
        <span>test text</span>
      </div>
      <div className="task-bar__remover">
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
