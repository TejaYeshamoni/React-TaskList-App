import React, { useState } from 'react';

function TaskStatus({ task }) {
    const [status, setStatus] = useState(task.status);
  
    const handleStatusChange = () => {
      setStatus(prevStatus => prevStatus === 'Incomplete' ? 'Complete' : 'Incomplete');
    };
  
    return (
      <div>
        <p>{task.name}</p>
        <button onClick={handleStatusChange}>{status}</button>
      </div>
    );
  }
  
  export default TaskStatus;