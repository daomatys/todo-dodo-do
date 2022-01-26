import './TaskBar.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Button,
} from 'antd';

import {
  DeleteOutlined,
} from '@ant-design/icons';

function handleSwitcherChange(checked:boolean) {
  console.log(checked);
  // toggle task state
}

function handleRemoverClick() {
  // invoke context remove of that element
}

function TaskBar({ note }:{note:string}) {
  return (
    <div className="TaskBar">
      <div className="TaskBar__StateSwitcher">
        <Switch
          checkedChildren="DONE"
          unCheckedChildren="LAZY"
          onChange={handleSwitcherChange}
        />
      </div>
      <div className="TaskBar__Note">
        <span>{note}</span>
      </div>
      <div className="TaskBar__Remover">
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
