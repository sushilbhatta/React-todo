import ProjectsSidebar from "./components/TodoSidebar";
import "./App.css";
import NewProject from "./components/NewTodo";

export default function App() {
  return (
    <main className='main'>
      <ProjectsSidebar></ProjectsSidebar>
      <NewProject></NewProject>
    </main>
  );
}
