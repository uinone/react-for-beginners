import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [num, setNum] = useState(0);
  function deleteToDo(id) {
    const newTodos = todos.filter((todo) => id !== todo.id);
    setTodos(newTodos);
  }
  function addTodo(title) {
    setTodos([...todos, { title, id: num }]);
    setNum((num) => num + 1);
  }
  return <ToDoList todos={todos} onDelete={deleteToDo} onAdd={addTodo} />;
}

export default App;
