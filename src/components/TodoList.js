import React from "react";
import TodoItem from "./TodoItem";

function TodoList({
  todos,
  onChangeComplete,
  onRemove,
  updateToggle,
  updateTodo,
}) {
  console.log("TodoList 렌더");
  return (
    <ul className="todo-list">
      {todos.map((info) => (
        <TodoItem
          key={info.id}
          info={info}
          onChangeComplete={onChangeComplete}
          onRemove={onRemove}
          updateToggle={updateToggle}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
}

export default React.memo(TodoList);
