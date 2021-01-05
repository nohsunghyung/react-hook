import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, onChangeComplete, onRemove }) {
  console.log("TodoList 렌더");
  return (
    <ul className="todo-list">
      {todos.map((info) => (
        <TodoItem
          key={info.id}
          info={info}
          onChangeComplete={onChangeComplete}
          onRemove={onRemove}
        />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
