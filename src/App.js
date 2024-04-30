import React, { useState } from 'react';
import TaskList from './components/TaskListInterface';
import TaskAssignment from './components/TaskAssignment';
import TaskStatus from './components/TaskStatusUpdates';
import TaskSummary from './components/TaskSummaryPage';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Task 1', status: 'Incomplete', assignedTo: '' },
    { id: 2, name: 'Task 2', status: 'Incomplete', assignedTo: '' },
    // ...
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const assignTask = (taskId, userId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, assignedTo: userId } : task));
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, status } : task));
  };

  return (
    <div className="App">
      <h1>Task List Application</h1>
      <TaskList tasks={tasks} onAddTask={addTask} />
      <TaskAssignment tasks={tasks} onAssignTask={assignTask} />
      {tasks.map(task => <TaskStatus key={task.id} task={task} onUpdateTaskStatus={updateTaskStatus} />)}
      <TaskSummary tasks={tasks} />
    </div>
  );
}

export default App;

