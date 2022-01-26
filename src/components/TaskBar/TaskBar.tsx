import './TaskBar.css';
import 'antd/dist/antd.css';

import {
  Switch,
  Button,
} from 'antd';

import {
  DeleteOutlined,
} from '@ant-design/icons';

import {
  useContext
} from 'react';

import AppContext from '../App.context';

function TaskBar({ note }:{note:string}) {
  const {
    completedTasksCount,
    setCompletedTasksCount,
  } = useContext(AppContext);

  const handleSwitcherChange = (checked:boolean) => {
    const addendum = checked ? 1 : -1 ;

    setCompletedTasksCount( completedTasksCount + addendum )
  }
  
  const handleRemoverClick = () => {
    // invoke context remove of that element
  }

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
