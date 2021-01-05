import React from "react";

function TodoItem({ info, onChangeComplete, onRemove }) {
  const { id, text, isComplete } = info;
  console.log("TodoItem 렌더");
  return (
    <li className={isComplete ? "list-item active" : "list-item"}>
      <div className="text">{text}</div>
      <div className="checked">
        <input
          type="checkbox"
          id={`chk-${id}`}
          onChange={() => onChangeComplete(id)}
        />
      </div>
      <div className="button">
        <button>수정</button>
        <button onClick={() => onRemove(id)}>삭제</button>
      </div>
    </li>
  );
}

export default React.memo(TodoItem);
