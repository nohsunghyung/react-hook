import React, { useState, useCallback } from "react";
import Container from "./components/Container";
import InsertForm from "./components/InsertForm";
import TodoList from "./components/TodoList";

function App() {
  const makeTodos = useCallback(() => {
    let todos = [];
    for (let i = 0; i < 5; i++) {
      todos.push({ id: i, text: `할일-${i}`, isComplete: false });
    }
    return todos;
  }, []);

  const [todos, setTodos] = useState(makeTodos);
  const onChangeComplete = (e, id) => {
    const checked = e.target.checked;
    const newTodos = todos.map((info) =>
      info.id === id ? { ...info, isComplete: !info.isComplete } : info
    );
    console.log(newTodos);
    setTodos(newTodos);
  };
  return (
    <Container>
      <div className="wrapper">
        <header>TodoList</header>
        <div className="content">
          <InsertForm />
          <TodoList todos={todos} onChangeComplete={onChangeComplete} />
        </div>
      </div>
    </Container>
  );
}

export default App;
