import React, { useRef } from "react";

type NewTodoProps ={
  onAddTodo:(todoText:string) => void;
}

function NewTodo(props:NewTodoProps) {
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText: string = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };
  const textInputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="flex flex-col m-5 space-y-4 sm:max-w-xl sm:w-full" onSubmit={todoSubmitHandler}>
      <h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-400"
      >
        My Todo List
      </h1>
      <div className="space-x-2 flex">
        <input
          className="p-2 text-2xl bg-white rounded-xl text-black font-extralight w-full"
          type="text"
          id="todo-text"
          ref={textInputRef}
          placeholder="Enter your new todo..."
        />
        <button
          type="submit"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-2xl px-5 py-2.5 text-center mx-auto"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default NewTodo;
