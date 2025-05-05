import React from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  if (todos.length === 0) {
    return <p className="text-center text-gray-500">Hech qanday vazifa yo‘q.</p>;
  }

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
