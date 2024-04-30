import React, { useState } from 'react';

function TaskList() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(task.trim() !== '' && task.length <= 100) {
      setTasks([...tasks, { name: task, status: 'Incomplete', assignedTo: '' }]);
      setTask('');
    } else {
      alert('Invalid input! Task must not be empty and must be within 100 characters.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={task} onChange={handleInputChange} placeholder="Add new task" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task.name}</li>)}
      </ul>
    </div>
  );
}

export default TaskList;