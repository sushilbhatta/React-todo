import noTodoImage from "../assets/no-todo.png";
import Button from "./Button";
export default function NoTodoSelected({ onStartAddTodo }) {
  return (
    <div className='no-todo'>
      <img src={noTodoImage} alt='An empty task list pad with Pen and Paper' />
      <h2>No Todo Selected</h2>
      <p className='no-todo__description'>
        Select a todo from the sidebar or get started by creating a new todo
      </p>
      <p className='no-todo__button--container'>
        <Button onClick={onStartAddTodo}>Add New Task</Button>
      </p>
    </div>
  );
}
