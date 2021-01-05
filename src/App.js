import React, { useState, useRef, useCallback } from "react";
import Container from "./components/Container";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";
const makeTodos = () => {
  let todos = [];
  for (let i = 0; i < 5; i++) {
    todos.push({ id: i, text: `할일-${i}`, isComplete: false });
  }
  return todos;
};
function App() {
  const [todos, setTodos] = useState(makeTodos);
  const nextId = useRef(todos.length);
  const [inputValue, setInputValue] = useState("");
  const onChangeComplete = useCallback((id) => {
    const newTodos = (todos) =>
      todos.map((info) =>
        info.id === id ? { ...info, isComplete: !info.isComplete } : info
      );
    setTodos(newTodos);
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
      console.log(todos);
      setTodos((todos) => todos.concat(newTodo));
      nextId.current++;
      setInputValue("");
    },
    [todos, inputValue]
  );
  const onRemove = useCallback((id) => {
    setTodos((todos) => todos.filter((info) => info.id !== id));
  }, []);
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
          />
        </div>
      </div>
    </Container>
  );
}

export default App;
