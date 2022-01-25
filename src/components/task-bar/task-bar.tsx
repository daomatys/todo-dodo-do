import './task-bar.css';
import 'antd/dist/antd.css';
import { Switch } from 'antd';

function onChange(checked:boolean) {
  console.log(`switch to ${checked}`);
}

function TaskBar() {
  return (
    <div className='task-bar'>
      <div className='task-bar__note'>

      </div>
      <div className='task-bar__state-switcher'>
        <Switch
          checkedChildren="DONE"
          unCheckedChildren="LAZY"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TaskBar;
