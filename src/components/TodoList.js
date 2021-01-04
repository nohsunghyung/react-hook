import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onChangeComplete }) {
  return (
    <ul className="todo-list">
      {todos.map((info) => (
        <TodoItem
          key={info.id}
          info={info}
          onChangeComplete={onChangeComplete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
