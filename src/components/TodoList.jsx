import React from "react";
import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { handleDeleteTodo, handleCompletedTodo, handleEditTodo, todos, tab } = props;

  // const tab = "All";
  const filterTodosList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <ul className="main">
      {filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todoIndex={todos.findIndex((val) => val.input === todo.input)} todo={todo} {...props}></TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
