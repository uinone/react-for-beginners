import { useState } from "react";
import ToDo from "./ToDo";

function ToDoList({ todos = [], onDelete = (f) => f, onAdd = (f) => f }) {
  const [title, setTitle] = useState("");
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <button
          onClick={() => {
            onAdd(title);
            setTitle("");
          }}
        >
          Add
        </button>
      </div>
      {todos.length === 0 ? <h1>Add some todos</h1> : null}
      {todos.map((todo) => (
        <ToDo
          title={todo.title}
          key={todo.id}
          id={todo.id}
          deleteTodo={onDelete}
        />
      ))}
    </div>
  );
}

export default ToDoList;
