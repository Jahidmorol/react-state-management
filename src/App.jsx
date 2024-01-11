import TodoForm from "./components/Todo/TodoForm";
import TodoList from "./components/Todo/TodoList";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
