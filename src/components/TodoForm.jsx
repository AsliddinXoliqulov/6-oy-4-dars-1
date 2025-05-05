import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import PropTypes from "prop-types";

function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      onAdd(text);
      setText(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
      <input
        type="text"
        className="flex-grow border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Vazifa yozing..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-all"
        title="Qo‘shish"
      >
        <FaPlus />
      </button>
    </form>
  );
}

TodoForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TodoForm;
