import React from 'react';
import './index.css';
const statusOptions = ['Started', 'In Progress', 'Completed'];

function TaskStatus({ task, onUpdateTaskStatus }) {
  const handleStatusChange = (newStatus) => {
    onUpdateTaskStatus(task.id, newStatus);
  };

  return (
    <div className="task-status">
      <p className="task-name">{task.name} - Current Status: <span className={`status ${task.status.toLowerCase()}`}>{task.status}</span></p>
      {statusOptions.map(status => (
        <button
          key={status}
          className={`status-button ${status.toLowerCase()}`}
          disabled={task.status === status}
          onClick={() => handleStatusChange(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}

export default TaskStatus;
