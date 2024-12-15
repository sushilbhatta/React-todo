import Button from "./Button";

// import "./App.css";
export default function TodoSidebar({ onStartAddTodo, todos }) {
  return (
    <aside className='projects-sidebar'>
      <h2 className=''>Your Todos</h2>
      <div>
        <Button onClick={onStartAddTodo}>+ New Task</Button>
      </div>
      <ul className='todo-task__list'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <button>{todo.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
