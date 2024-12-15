import ProjectsSidebar from "./components/TodoSidebar";
import "./App.css";
import NoTodoSelected from "./components/NoTodoSelected";
import { useState } from "react";
import NewProject from "./components/NewTodo";

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
  let content;
  if (todoState.selectedTodoId === null) {
    content = <NewProject />;
  } else if (todoState.selectedTodoId === undefined) {
    content = <NoTodoSelected onStartAddTodo={handleStartAddTodo} />;
  }

  return (
    <main className='main'>
      <ProjectsSidebar onStartAddTodo={handleStartAddTodo}></ProjectsSidebar>
      {/* <NewProject></NewProject> */}
      {content}
    </main>
  );
}
