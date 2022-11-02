import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div>
      <Form className=" mx-5" onSubmit={submit}>
        <h4 className=" text-center">Todo Add</h4>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button className=" btn-sm" variant="success" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};
