/* eslint-disable react/prop-types */
import { useState } from "react";
import NewTask from "./NewTask";
export default function Tasks({ tasks, onAdd, onDelete }) {
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const handleCheckboxChange = (taskId) => {
    // Toggle the checked state
    setCompletedTasks((prev) => {
      const newCompletedTasks = new Set(prev);
      if (newCompletedTasks.has(taskId)) {
        newCompletedTasks.delete(taskId);
      } else {
        newCompletedTasks.add(taskId);
      }
      return newCompletedTasks;
    });
  };

  return (
    <section className='tasks'>
      <h2 className='task-heading'>Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && <p>No Tasks in this Todo List. </p>}
      {tasks.length > 0 && (
        <ul className='task-items'>
          {tasks.map((task) => (
            <li key={task.id} className='task-item'>
              <span
                style={{
                  textDecoration: completedTasks.has(task.id)
                    ? "line-through"
                    : "none",
                  color: completedTasks.has(task.id) ? "red" : "black",
                }}
              >
                {task.text}
              </span>
              <span className='task-item__actions'>
                <input
                  type='checkbox'
                  onChange={() => handleCheckboxChange(task.id)}
                  checked={completedTasks.has(task.id)}
                />
                <button className='button' onClick={() => onDelete(task.id)}>
                  Clear
                </button>
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
