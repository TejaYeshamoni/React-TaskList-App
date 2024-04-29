import React, { useState } from 'react';

const TaskAssignment = ({ tasks, setTasks }) => {
  const [selectedTask, setSelectedTask] = useState('');
  const [assignedUser, setAssignedUser] = useState('');

  const handleAssignTask = () => {
    if (selectedTask && assignedUser) {
      const updatedTasks = tasks.map((task) =>
        task.id === selectedTask ? { ...task, assignedTo: assignedUser } : task
      );
      setTasks(updatedTasks);
      setSelectedTask('');
      setAssignedUser('');
    }
  };

  return (
    <div>
      <h2>Assign Tasks</h2>
      <select value={selectedTask} onChange={(e) => setSelectedTask(e.target.value)}>
        <option value="">Select a task</option>
        {tasks.map((task) => (
          <option key={task.id} value={task.id}>
            {task.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Assign to user/team"
        value={assignedUser}
        onChange={(e) => setAssignedUser(e.target.value)}
      />
      <button onClick={handleAssignTask}>Assign</button>
    </div>
  );
};

export default TaskAssignment;