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

class TaskBar extends React.Component {
  note: string;

  constructor(props:ITaskBar) {
    super(props);
    this.note = props.note;
  }

  render() {
    return (
      <div className="task-bar">
        <div className="task-bar__state-switcher">
          <Switch
            checkedChildren="DONE"
            unCheckedChildren="LAZY"
            onChange={this.handleSwitcherChange}
          />
        </div>
        <div className="task-bar__note">
          <span>{this.note}</span>
        </div>
        <div className="task-bar__remover">
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            onClick={this.handleRemoverClick}
          />
        </div>
      </div>
    );
  }

  handleSwitcherChange(checked:boolean) {
    console.log(`switch to ${checked}`);
  }

  handleRemoverClick() {
    console.log('clicked');
  }
}

export default TaskBar;
