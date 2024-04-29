import React, { useState } from 'react';
import TaskList from './components/TaskList';
import TaskAssignment from './components/TaskAssignment';

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <TaskList tasks={tasks} setTasks={setTasks} />
      <TaskAssignment tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;