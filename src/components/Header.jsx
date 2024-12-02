import React from "react";

const Header = (props) => {
  const { todos } = props;
  const todosLength = todos.filter((todo) => !todo.complete).length;
  const isTasksPlural = todos.length !== 1;
  const tasksOrTasks = isTasksPlural ? 'tasks' : 'task'
  return (
    <header>
      <h1>You have {todosLength} open {tasksOrTasks}</h1>
    </header>
  );
};

export default Header;
