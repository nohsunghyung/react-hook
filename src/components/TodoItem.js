import React from "react";

function TodoItem({ info, onChangeComplete }) {
  const { id, text, isComplete } = info;
  return (
    <li className="list-item" className={isComplete ? "active" : ""}>
      <div className="text">{text}</div>
      <div className="checked">
        <input
          type="checkbox"
          id={`chk-${id}`}
          onChange={(e) => onChangeComplete(e, id)}
        />
      </div>
      <div className="button">
        <button>수정</button>
        <button>삭제</button>
      </div>
    </li>
  );
}

export default TodoItem;
