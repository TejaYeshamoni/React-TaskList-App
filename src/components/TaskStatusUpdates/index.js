

import React from 'react';

function TaskStatus({ task, onUpdateTaskStatus }) {
  const handleStatusChange = (newStatus) => {
    onUpdateTaskStatus(task.id, newStatus);
  };

  return (
    <div>
      <p>{task.name} - Current Status: {task.status}</p>
      <button onClick={() => handleStatusChange('Started')}>Start</button>
      <button onClick={() => handleStatusChange('In Progress')}>In Progress</button>
      <button onClick={() => handleStatusChange('Completed')}>Complete</button>
    </div>
  );
}

export default TaskStatus;
