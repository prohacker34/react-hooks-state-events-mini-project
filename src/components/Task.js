import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button
        className="delete"
        onClick={() => {
          console.log(`Task to delete: ${text}`); 
          onDelete(text);
        }}
      >
        X
      </button>
    </div>
  );
}

export default Task;
