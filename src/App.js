import React from 'react';

import TaskList from './components/TaskListInterface';
import TaskAssignment from './components/TaskAssignment';
import TaskStatus from './components/TaskStatusUpdates';
import TaskSummary from './components/TaskSummaryPage';

function App() {
  // we would typically fetch these from  backend
  const tasks = [
    { name: 'Task 1', status: 'Incomplete' },
    { name: 'Task 2', status: 'Incomplete' },
    // ...
  ];

  return (
    <div className="App">
      <h1>Task List Application</h1>
      <TaskList />
      <TaskAssignment />
      {tasks.map(task => <TaskStatus key={task.name} task={task} />)}
      <TaskSummary tasks={tasks} />
    </div>
  );
}

export default App;