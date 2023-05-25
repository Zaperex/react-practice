import { useState, useEffect } from "react";
import listElement from "./Types/types.tsx";
import NewTodoForm from "./Components/NewTodoForm";
import TodoList from "./Components/TodoList";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState<listElement[]>([]);
  // It seems localStorage does not work
  // const [todos, setTodos] = useState<listElement[]>(() => {
  //   const localValue = localStorage.getItems("ITEMS");
  //   if (localValue == null) return [];
  //   return JSON.parse(localValue);
  // });

  // useEffect(() => {
  //   localStorage.setItem("ITEMS", JSON.stringify(todos));
  // }, [todos]);

  function addTodo(title: string) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function deleteTodo(id: string) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id: string, completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  function toggleAll(completed: boolean) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return { ...todo, completed };
      });
    });
  }
  function clearTodos() {
    setTodos([]);
  }
  console.log(todos);
  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <button className="btn btn-danger" onClick={() => clearTodos()}>
        Delete All
      </button>
      <button className="btn" onClick={() => toggleAll(true)}>
        Toggle All On
      </button>
      <button className="btn" onClick={() => toggleAll(false)}>
        Toggle All Off
      </button>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
