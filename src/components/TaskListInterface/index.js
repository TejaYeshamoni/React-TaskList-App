import React, { useState } from 'react';

import './index.css'

function Task({ task }) {
  return <li className="task-item">{task.name}</li>;
}

function TaskForm({ addTask }) {
  const [task, setTask] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(task.trim() !== '' && task.length <= 100) {
      addTask({ name: task, status: 'Incomplete', assignedTo: '' });
      setTask('');
      setError('');
    } else {
      setError('Invalid input! Task must not be empty and must be within 100 characters.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input type="text" value={task} onChange={handleInputChange} placeholder="Add new task" className="task-input" />
      <button type="submit" className="submit-button">Add</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="task-list">
      <TaskForm addTask={addTask} />
      <ul>
        {tasks.map((task) => <Task key={task.id} task={task} />)}
      </ul>
    </div>
  );
}

export default TaskList;
