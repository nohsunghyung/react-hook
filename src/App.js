import React, { useState, useRef, useCallback } from "react";
import Container from "./components/Container";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";
const makeTodos = () => {
  let todos = [];
  for (let i = 0; i < 5; i++) {
    todos.push({
      id: i,
      text: `할일-${i}`,
      isComplete: false,
      isUpdate: false,
    });
  }
  return todos;
};
function App() {
  const [todos, setTodos] = useState(makeTodos);
  const nextId = useRef(6);
  const [inputValue, setInputValue] = useState("");
  const onChangeComplete = useCallback((id) => {
    setTodos((todos) =>
      todos.map((info) =>
        info.id === id ? { ...info, isComplete: !info.isComplete } : info
      )
    );
  }, []);
  const onChangeValue = useCallback((e) => {
    const value = e.target.value;
    setInputValue(value);
  }, []);
  const addTodo = useCallback(
    (e) => {
      e.preventDefault();
      const newTodo = {
        id: nextId.current,
        text: inputValue,
        isComplete: false,
      };
      setTodos((todos) => todos.concat(newTodo));
      nextId.current++;
      setInputValue("");
    },
    [inputValue]
  );
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((info) => info.id !== id));
  }, []);

  const updateToggle = useCallback((id) => {
    setTodos((todos) =>
      todos.map((info) =>
        info.id === id ? { ...info, isUpdate: !info.isUpdate } : info
      )
    );
  }, []);

  const updateTodo = (id, value) => {
    setTodos((todos) =>
      todos.map((info) =>
        info.id === id ? { ...info, text: value, isUpdate: false } : info
      )
    );
  };
  return (
    <Container>
      <div className="wrapper">
        <header>TodoList</header>
        <div className="content">
          <InsertForm
            value={inputValue}
            onChange={onChangeValue}
            addTodo={addTodo}
          />
          <TodoList
            todos={todos}
            onChangeComplete={onChangeComplete}
            onRemove={onRemove}
            updateToggle={updateToggle}
            updateTodo={updateTodo}
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
