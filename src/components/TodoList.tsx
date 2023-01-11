import React, { useRef, useEffect } from "react";

type TodoListProps = {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
};

function TodoList(props: TodoListProps) {
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = -listRef.current.scrollHeight;
    }
  }, [props.items]);

  return (
    <ol ref={listRef} className="sm:max-w-xl sm:w-full mx-5 space-y-3  pb-20 overflow-scroll scroll-m-3">
      {props.items.map((todo, index) => {
        const number = props.items.length - index;
        return (
          <li
            key={todo.id}
            className="flex items-center  pl-2  rounded-lg bg-gray-100 text-black font-extralight shadow-2xl"
          >
            <span className="overflow-hidden mr-2  text-ellipsis">
              {number + ". "}
              {todo.text}
            </span>
            <button className="ml-auto"></button>
            <button
              onClick={props.onDeleteTodo.bind(true, todo.id)}
              type="button"
              className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-[1px] focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-2 py-1 text-center m-1"
            >
              Del
            </button>
          </li>
        );
      })}
    </ol>
  );
}

export default TodoList;
