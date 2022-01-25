import './TaskBar.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Button,
} from 'antd';

import {
  DeleteOutlined,
} from '@ant-design/icons';

import React from 'react';
import ITaskBar from './TaskBar.interface';

class TaskBar extends React.Component<ITaskBar> {
  note: string;

  constructor(props:ITaskBar) {
    super(props);
    this.note = props.note;
  }

  static handleSwitcherChange(checked:boolean) {
    console.log(`switch to ${checked}`);
  }

  static handleRemoverClick() {
    console.log('clicked');
  }

  render() {
    return (
      <div className="task-bar">
        <div className="task-bar__state-switcher">
          <Switch
            checkedChildren="DONE"
            unCheckedChildren="LAZY"
            onChange={TaskBar.handleSwitcherChange}
          />
        </div>
        <div className="task-bar__note">
          <span>{this.note}</span>
        </div>
        <div className="task-bar__remover">
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={TaskBar.handleRemoverClick}
          />
        </div>
      </div>
    );
  }
}

export default TaskBar;
