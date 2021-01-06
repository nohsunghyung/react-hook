import React, { useState } from "react";

function TodoItem({
  info,
  onChangeComplete,
  onRemove,
  updateToggle,
  updateTodo,
}) {
  const { id, text, isComplete, isUpdate } = info;
  const [inputValue, setInputValue] = useState("");
  const onChangeToggle = () => {
    updateToggle(id);
    setInputValue(text);
  };
  const onChangeValue = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };
  console.log("TodoItem 렌더");
  return (
    <li className={isComplete ? "list-item active" : "list-item"}>
      <div className="text">
        {isUpdate ? (
          <input
            type="text"
            placeholder="todo를 적어주세요"
            value={inputValue}
            onChange={onChangeValue}
          />
        ) : (
          text
        )}
      </div>
      <div className="checked">
        <input
          type="checkbox"
          id={`chk-${id}`}
          onChange={() => onChangeComplete(id)}
        />
      </div>
      {isUpdate ? (
        <div className="button">
          <button onClick={() => updateTodo(id, inputValue)}>확인</button>
          <button onClick={onChangeToggle}>취소</button>
        </div>
      ) : (
        <div className="button">
          <button onClick={onChangeToggle}>수정</button>
          <button onClick={() => onRemove(id)}>삭제</button>
        </div>
      )}
    </li>
  );
}

export default React.memo(TodoItem);
