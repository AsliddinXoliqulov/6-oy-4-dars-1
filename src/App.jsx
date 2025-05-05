import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const progress = todos.length === 0 ? 0 : (completedCount / todos.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Asliddin TODO List</h1>
      <TodoForm onAdd={addTodo} />
      <ProgressBar progress={progress} />
      <TodoList
        todos={todos}
        onToggle={toggleComplete}
        onUpdate={updateTodo}
        onDelete={deleteTodo}
      />
    </div>
  );
}

export default App;
