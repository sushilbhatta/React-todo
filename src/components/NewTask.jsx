/* eslint-disable react/prop-types */
import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  console.log("Enter Task" + enteredTask);

  function handleClick() {
    if (enteredTask.trim().length === 0) return;
    onAdd(enteredTask);
    setEnteredTask("");
  }
  return (
    <div className='new-task'>
      <input onChange={handleChange} value={enteredTask} type='text' />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
}
