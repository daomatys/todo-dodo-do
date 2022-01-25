import './task-bar.css';
import 'antd/dist/antd.css';
import {
  Switch,
  Button,
} from 'antd';
import {
  DeleteOutlined,
} from '@ant-design/icons';

function onChange(checked:boolean) {
  console.log(`switch to ${checked}`);
}

function TaskBar() {
  return (
    <div className="task-bar">
      <div className="task-bar__note">
        <span />
      </div>
      <div className="task-bar__state-switcher">
        <Switch
          checkedChildren="DONE"
          unCheckedChildren="LAZY"
          onChange={onChange}
        />
      </div>
      <div className="task-bar__trashcan">
        <Button type="primary" icon={<DeleteOutlined />} />
      </div>
    </div>
  );
}

export default TaskBar;
