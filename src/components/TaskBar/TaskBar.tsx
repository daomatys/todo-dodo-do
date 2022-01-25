import './TaskBar.css';
import 'antd/dist/antd.css';
import React from 'react';
import {
  Switch,
  Button,
} from 'antd';
import {
  DeleteOutlined,
} from '@ant-design/icons';

class TaskBar extends React.Component {

  super(props:Object) {
    this.props = props;
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
          <span>test text</span>
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
