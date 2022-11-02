import React from "react";
import Button from "react-bootstrap/Button";

function TodoItem({ todo, onDelete }) {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <Button
        className="btn-danger btn-sm"
        onClick={() => {
          onDelete(todo);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default TodoItem;
