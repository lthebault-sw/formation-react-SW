import React from 'react';

const Task = ({ task, handleCheck }) => (
  <tr>
    <td>{task.name}</td>
    <td>
      <input type="checkbox" checked={task.done} onClick={handleCheck} />
    </td>
  </tr>
);

export default Task;
