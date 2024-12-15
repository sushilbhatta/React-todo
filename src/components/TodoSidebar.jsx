import Button from "./Button";

// import "./App.css";
export default function TodoSidebar({ onStartAddTodo }) {
  return (
    <aside className='projects-sidebar'>
      <h2 className=''>Your Todos</h2>
      <div>
        <Button onClick={onStartAddTodo}>+ New Task</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
