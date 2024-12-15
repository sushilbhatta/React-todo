/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";

// import "./App.css";
export default function TodoSidebar({
  onStartAddTodo,
  todos,
  onSelectTodo,
  selectedTodoId,
}) {
  return (
    <aside className='projects-sidebar'>
      <h2 className=''>Your Todos</h2>
      <div>
        <Button onClick={onStartAddTodo}>+ New Task</Button>
      </div>
      <ul className='todo-task__list'>
        {todos.map((todo) => {
          let cssClasses = "task-list__btn";
          if (todo.id === selectedTodoId) {
            cssClasses = "task-list__btn--active";
          } else {
            cssClasses = "task-list__btn--extra";
          }
          return (
            <li key={todo.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectTodo(todo.id)}
              >
                <span>{todo.title}</span>
                <span>
                  <IconContext.Provider color='blue' value={{ size: "1rem" }}>
                    <FaArrowRight></FaArrowRight>
                  </IconContext.Provider>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
