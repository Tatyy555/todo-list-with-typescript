import React, { useState } from "react";
import Footer from "./components/Footer";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((previous) => [
      { id: Math.random().toString(), text: text },
      ...previous,
    ]);
  };

  const todoDeleteHandler = (id: string) => {
    setTodos((previous) => {
      return previous.filter((todo) => todo.id !== id);
    });
  };

  return (
    <div className="sm:items-center h-screen flex flex-col bg-gradient-to-r from-sky-400 to-blue-500 text-white ">
      {/* Add Todos */}
      <NewTodo onAddTodo={todoAddHandler} />
      {/* Show Todos */}
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
      <Footer />
    </div>
  );
}

export default App;
