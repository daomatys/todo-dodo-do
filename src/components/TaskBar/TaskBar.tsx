import './TaskBar.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Button,
} from 'antd';

import {
  DeleteOutlined,
} from '@ant-design/icons';
import ReactDOM from 'react-dom';
import React from 'react';
import ITaskBar from './TaskBar.interface';

class TaskBar extends React.Component<ITaskBar> {
  note: string;
  elem: React.RefObject<HTMLDivElement>;

  constructor(props:ITaskBar) {
    super(props);
    this.elem = React.createRef();
    this.note = props.note;
  }

  static handleSwitcherChange(checked:boolean) {
    console.log(`switch to ${checked}`);
  }

  handleRemoverClick() {
    const elem = this.elem.current;

    if (elem) {
      ReactDOM.unmountComponentAtNode(elem);
    }
  }
  
  componentDidMount() {
    console.log('Mounted: ', this.elem)
  }

  render() {
    console.log('render!');
    return (
      <div className="task-bar" ref={this.elem}>
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
            onClick={this.handleRemoverClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default TaskBar;
