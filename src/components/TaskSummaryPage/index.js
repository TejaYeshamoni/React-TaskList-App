import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './index.css'; 

const statusColors = {
  'Incomplete': '#FF0000',
  'Started': '#FFFF00',
  'In Progress': '#0000FF',
  'Completed': '#00FF00'
};

function Task({ task }) {
  return (
    <li className="task-item">
      {task.name} - Status: <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span> - Assigned to: {task.assignedTo}
    </li>
  );
}

function TaskSummary({ tasks }) {
  const taskStatusCounts = tasks.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] || 0) + 1;
    return counts;
  }, {});

  const data = Object.keys(taskStatusCounts).map(status => ({
    title: status,
    value: taskStatusCounts[status],
    color: statusColors[status]
  }));

  return (
    <div className="task-summary">
      <h2 className="summary-title">Task Summary</h2>
      <PieChart data={data} className="summary-chart" />
      <ul className="task-list">
        {tasks.map((task) => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  );
}

export default TaskSummary;
