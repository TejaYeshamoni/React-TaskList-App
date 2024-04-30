import React, { useState } from 'react';

// Assuming you have a list of users and tasks
const users = ['User1', 'User2', 'User3'];
let tasks = [{ name: 'Task1', status: 'Incomplete', assignedTo: '' }, { name: 'Task2', status: 'Incomplete', assignedTo: '' }];

function TaskAssignment() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [selectedTask, setSelectedTask] = useState(tasks[0].name);
  const [taskList, setTaskList] = useState(tasks);

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleTaskChange = (event) => {
    setSelectedTask(event.target.value);
  };

  const assignTask = () => {
    const updatedTasks = taskList.map(task => task.name === selectedTask ? { ...task, assignedTo: selectedUser } : task);
    setTaskList(updatedTasks);
  };

  return (
    <div>
      <select value={selectedUser} onChange={handleUserChange}>
        {users.map(user => <option key={user} value={user}>{user}</option>)}
      </select>
      <select value={selectedTask} onChange={handleTaskChange}>
        {taskList.map(task => <option key={task.name} value={task.name}>{task.name}</option>)}
      </select>
      <button onClick={assignTask}>Assign Task</button>
      <ul>
        {taskList.map((task, index) => <li key={index}>{task.name} is assigned to {task.assignedTo}</li>)}
      </ul>
    </div>
  );
}

export default TaskAssignment;