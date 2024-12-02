import React, { useState } from "react";

const TodoInput = (props) => {
  const {
    handleAddTodos,
    handleEditTodoValue,
    handleEditTodo,
    todoValue,
    todoComplete,
    clearData,
  } = props;
  return (
    <header>
      <input
        value={todoValue}
        placeholder="Add task"
        onChange={(e) => {
          handleEditTodoValue(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          if (!todoValue) {
            return;
          }
          handleAddTodos(todoValue, todoComplete);
          handleEditTodoValue("");
        }}
      >
        Add
      </button>
      <button onClick={() => clearData()}>Clear All</button>
    </header>
  );
};

export default TodoInput;
