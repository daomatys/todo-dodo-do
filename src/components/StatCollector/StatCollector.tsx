import './StatCollector.css';

function StatCollector() {
  return (
    <div className="StatCollector">
      <span className="StatCollector__TasksCount_Completed"></span>
      of
      <span className="StatCollector__TasksCount_Overall"></span>
      tasks are completed!
    </div>
  );
}

export default StatCollector;
