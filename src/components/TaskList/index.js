import React, { useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), name: newTask, assignedTo: null }]);
      setNewTask('');
    }
  };

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name} {task.assignedTo && `(Assigned to ${task.assignedTo})`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;