import ProjectsSidebar from "./components/TodoSidebar";
import "./App.css";
import NoTodoSelected from "./components/NoTodoSelected";
import { useState } from "react";
import NewTodo from "./components/NewTodo";

export default function App() {
  const [todoState, setTodoState] = useState({
    selectedTodoId: undefined,
    todos: [],
  });
  // undefined: no todo task are selected ->
  //  null:some todo task are selected.
  function handleStartAddTodo() {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: null,
      };
    });
  }

  function handleAddProject(todoData) {
    setTodoState((prevState) => {
      const todoId = Math.random();
      const newTodo = {
        ...todoData,
        id: todoId,
      };
      return {
        ...prevState,
        selectedTodoId: undefined,
        todos: [...prevState.todos, newTodo],
      };
    });
  }

  let content;
  if (todoState.selectedTodoId === null) {
    content = <NewTodo onAdd={handleAddProject} />;
  } else if (todoState.selectedTodoId === undefined) {
    content = <NoTodoSelected onStartAddTodo={handleStartAddTodo} />;
  }

  return (
    <main className='main'>
      <ProjectsSidebar
        onStartAddTodo={handleStartAddTodo}
        todos={todoState.todos}
      />
      {content}
    </main>
  );
}
