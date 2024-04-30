import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function TaskSummary({ tasks }) {
  const taskStatusCounts = tasks.reduce((counts, task) => {
    counts[task.status] = (counts[task.status] || 0) + 1;
    return counts;
  }, {});

  const data = Object.keys(taskStatusCounts).map(status => ({
    title: status,
    value: taskStatusCounts[status],
    color: status === 'Completed' ? '#00FF00' : '#FF0000'
  }));

  return (
    <div>
      <h2>Task Summary</h2>
      <PieChart data={data} />
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - Status: {task.status} - Assigned to: {task.assignedTo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskSummary;