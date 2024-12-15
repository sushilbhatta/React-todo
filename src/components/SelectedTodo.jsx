import Tasks from "./Tasks";

/* eslint-disable react/prop-types */
export default function SelectedTodo({
  todos,
  onDeleteTodo,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  //   console.log(todos);
  return (
    <div className='selected-todo'>
      <header className='selected-todo__header'>
        <div className='todo-header__details'>
          <h1>{todos.title}</h1>
          <button onClick={onDeleteTodo}>delete</button>
        </div>
        <p className='todo-header__description'>{todos.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
}
