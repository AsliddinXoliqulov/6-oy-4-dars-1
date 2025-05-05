import React, { useState } from "react";
import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import PropTypes from "prop-types";

function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title); // <-- was todo.text

  const handleUpdate = () => {
    if (editText.trim() !== "") {
      onUpdate(todo.id, editText);
      setIsEditing(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-between border rounded-lg p-3 ${
        todo.checked ? "bg-green-100" : "bg-gray-100"
      }`}
    >
      <div className="flex items-center gap-2 flex-grow">
        <input
          type="checkbox"
          checked={todo.checked}
          onChange={() => onToggle(todo.id, !todo.checked)}
          className="w-5 h-5"
        />
        {isEditing ? (
          <input
            type="text"
            className="border rounded px-2 py-1 flex-grow"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUpdate();
            }}
          />
        ) : (
          <span
            className={`flex-grow ${
              todo.checked ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </span>
        )}
      </div>

      <div className="flex items-center gap-2 ml-5">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            title="Saqlash"
            className="text-green-600 hover:text-green-800"
          >
            <FaCheck />
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            title="Tahrirlash"
            className="text-blue-500 hover:text-blue-700"
          >
            <FaEdit />
          </button>
        )}
        <button
          onClick={() => onDelete(todo.id)}
          title="O‘chirish"
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onToggle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoItem;
