import React, { useState } from 'react';
import './index.css'; 

const users = ['User1', 'User2', 'User3'];
let tasks = [{ id: 1, name: 'Task1', status: 'Incomplete', assignedTo: '' }, { id: 2, name: 'Task2', status: 'Incomplete', assignedTo: '' }];

function TaskAssignment() {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [selectedTask, setSelectedTask] = useState(tasks[0].id);
  const [taskList, setTaskList] = useState(tasks);
  const [message, setMessage] = useState('');

  const handleUserChange = (event) => {
    setSelectedUser(event.target.value);
  };

  const handleTaskChange = (event) => {
    setSelectedTask(Number(event.target.value));
  };

  const assignTask = () => {
    const taskToAssign = taskList.find(task => task.id === selectedTask);
    if (taskToAssign.assignedTo) {
      setMessage(`Task ${taskToAssign.name} is already assigned to ${taskToAssign.assignedTo}`);
    } else {
      const updatedTasks = taskList.map(task => task.id === selectedTask ? { ...task, assignedTo: selectedUser } : task);
      setTaskList(updatedTasks);
      setMessage(`Task ${taskToAssign.name} is now assigned to ${selectedUser}`);
      
      // Update selectedTask to the id of the first unassigned task
      const firstUnassignedTask = updatedTasks.find(task => !task.assignedTo);
      if (firstUnassignedTask) {
        setSelectedTask(firstUnassignedTask.id);
      }
    }
  };

  return (
    <div className="task-assignment">
      <select value={selectedUser} onChange={handleUserChange} className="task-select">
        {users.map(user => <option key={user} value={user}>{user}</option>)}
      </select>
      <select value={selectedTask} onChange={handleTaskChange} className="task-select">
        {taskList.filter(task => !task.assignedTo).map(task => <option key={task.id} value={task.id}>{task.name}</option>)}
      </select>
      <button onClick={assignTask} className="assign-button">Assign Task</button>
      <p className="message">{message}</p>
      <ul className="task-list">
        {taskList.map((task) => <li key={task.id} className="task-item">{task.name} is assigned to {task.assignedTo}</li>)}
      </ul>
    </div>
  );
}

export default TaskAssignment;
