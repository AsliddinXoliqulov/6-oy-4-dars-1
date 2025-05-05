import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import ProgressBar from "./components/ProgressBar";

const API_URL = "https://680247650a99cb7408e9198c.mockapi.io/toto-react/todo";

function App() {
  const [todos, setTodos] = useState([]);

  // GET - Yuklash
  useEffect(() => {
    axios.get(API_URL)
      .then(res => setTodos(res.data))
      .catch(err => console.error("Ma'lumotlarni olishda xatolik:", err));
  }, []);

  // POST - Yangi todo qo‘shish
  const addTodo = async (text) => {
    try {
      const res = await axios.post(API_URL, {
        title: text,
        checked: false
      });
      setTodos([res.data, ...todos]);
    } catch (err) {
      console.error("Todo qo‘shishda xatolik:", err);
    }
  };

  // PUT - Complete toggle qilish
  const toggleComplete = async (id) => {
    const todo = todos.find(t => t.id === id);
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        ...todo,
        checked: !todo.checked
      });
      setTodos(todos.map(t => t.id === id ? res.data : t));
    } catch (err) {
      console.error("Todo holatini o‘zgartirishda xatolik:", err);
    }
  };

  // PUT - Text yangilash
  const updateTodo = async (id, newText) => {
    const todo = todos.find(t => t.id === id);
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        ...todo,
        title: newText
      });
      setTodos(todos.map(t => t.id === id ? res.data : t));
    } catch (err) {
      console.error("Todo yangilashda xatolik:", err);
    }
  };

  // DELETE - O‘chirish
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter(t => t.id !== id));
    } catch (err) {
      console.error("Todo o‘chirishda xatolik:", err);
    }
  };

  const completedCount = todos.filter(t => t.checked).length;
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
