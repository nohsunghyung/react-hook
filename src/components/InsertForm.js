import React from "react";

function InsertForm({ value, onChange, addTodo }) {
  console.log("InsertForm 렌더");
  return (
    <div className="insert">
      <form onSubmit={addTodo}>
        <input type="text" onChange={onChange} value={value} />
        <button>등록</button>
      </form>
    </div>
  );
}

export default React.memo(InsertForm);
