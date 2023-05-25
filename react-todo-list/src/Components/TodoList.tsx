import listElement from "../Types/types";
import TodoItem from "./TodoItem";

interface Props {
  todos: listElement[];
  // Function call signatures
  toggleTodo: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
}
export default function TodoList({ todos, toggleTodo, deleteTodo }: Props) {
  return (
    <ul className="list">
      {todos.length === 0 && <p>No Todos</p>}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
