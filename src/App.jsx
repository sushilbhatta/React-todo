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
    tasks: [],
  });

  //Add the Task to the selected todo
  function handleAddTask(text) {
    setTodoState((prevState) => {
      const TaskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedTodoId,
        id: TaskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  // Delete the task from the selected todo
  function handleDeleteTask(id) {
    setTodoState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  // Select the Todo

  function handleSelectProject(id) {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: id,
      };
    });
  }

  // undefined: no todo task are selected ->

  // initialize Adding the Todo
  function handleStartAddTodo() {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: null,
      };
    });
  }

  // Cancle Adding Todo
  function handleCancelAddTodo() {
    setTodoState((prevState) => {
      return {
        ...prevState,
        selectedTodoId: undefined,
      };
    });
  }

  // Confirm to add the Todo
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

  // Delete the Todo
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
    <SelectedTodo
      todos={selectedTodo}
      onDeleteTodo={handleDeleteTodo}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={todoState.tasks}
    />
  );

  //  null:some todo task are selected. ->
  //  no todo Tasks selected
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
        selectedTodoId={todoState.selectedTodoId}
      />
      {content}
    </main>
  );
}
