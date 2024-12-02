import React from "react";

// const TodoCard = (props) => {
//   const { children, handleDeleteTodo, todoIndex, handleEditTodo } = props;
//   return (
//     <li className="todoItem">
//       {children}
//       <div className="actionsContainer">
//         <button onClick={() => handleEditTodo(todoIndex)}>
//           <i className="fa-solid fa-pen-to-square"></i>
//         </button>
//         <button onClick={() => handleDeleteTodo(todoIndex)}>
//           <i className="fa-solid fa-trash"></i>
//         </button>
//       </div>
//     </li>
//   );
// };

// export default TodoCard;

const TodoCard = (props) => {
  const {
    todoIndex,
    handleDeleteTodo,
    handleCompletedTodo,
    handleEditTodo,
    todo,
    tab,
  } = props;
  return (
    <div className="card todo-item">
      <p>{todo.input}</p>
      <div>
        <button
          className="todo-buttons"
          onClick={() => handleEditTodo(todoIndex)}
        >
          <h6>Edit</h6>{" "}
          <i
            className="fa-solid fa-pen-to-square"
            onClick={() => handleEditTodo(todoIndex)}
          ></i>
        </button>
        <button
          className={"todo-buttons " + (todo.complete ? " done" : "")}
          onClick={() => handleCompletedTodo(todoIndex)}
        >
          <h6>Done</h6> <i className="fa-solid fa-check"></i>
        </button>
        <button
          className="todo-buttons"
          onClick={() => handleDeleteTodo(todoIndex)}
        >
          <h6>Delete</h6> <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
