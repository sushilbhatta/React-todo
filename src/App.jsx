import ProjectsSidebar from "./components/TodoSidebar";
import "./App.css";
import NoTodoSelected from "./components/NoTodoSelected";
import { useState } from "react";
import NewTodo from "./components/NewTodo";
import SelectedTodo from "./components/SelectedTodo";

export default function App() {
  const [todoState, setTodoState] = useState({
    selectedTodoId: undefined,
    todos: [],
  });

  function handleSelectProject(id) {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: id,
      };
    });
  }

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

  function handleCancelAddTodo() {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: undefined,
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

  function handleDeleteTodo() {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: undefined,
        todos: prevState.todos.filter(
          (todo) => todo.id !== prevState.selectedTodoId
        ),
      };
    });
  }

  const selectedTodo = todoState.todos.find(
    (todo) => todo.id === todoState.selectedTodoId
  );
  let content = (
    <SelectedTodo todos={selectedTodo} onDeleteTodo={handleDeleteTodo} />
  );
  if (todoState.selectedTodoId === null) {
    content = (
      <NewTodo onCancel={handleCancelAddTodo} onAdd={handleAddProject} />
    );
  } else if (todoState.selectedTodoId === undefined) {
    content = <NoTodoSelected onStartAddTodo={handleStartAddTodo} />;
  }

  return (
    <main className='main'>
      <ProjectsSidebar
        onSelectTodo={handleSelectProject}
        onStartAddTodo={handleStartAddTodo}
        todos={todoState.todos}
      />
      {content}
    </main>
  );
}
