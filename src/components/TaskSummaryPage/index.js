import { PieChart } from 'react-minimal-pie-chart';

function TaskSummary({ tasks }) {
  const completedTasks = tasks.filter(task => task.status === 'Complete').length;
  const incompleteTasks = tasks.length - completedTasks;

  return (
    <PieChart
      data={[
        { title: 'Completed', value: completedTasks, color: '#00FF00' },
        { title: 'Incomplete', value: incompleteTasks, color: '#FF0000' }
      ]}
    />
  );
}

export default TaskSummary;