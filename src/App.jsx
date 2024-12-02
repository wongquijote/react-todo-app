import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Tabs from "./components/Tabs";

function App() {
  // const todos = [
  //   {input: 'walk', complete: true},
  //   {input: 'run', complete: true},
  //   {input: 'pray', complete: false},
  //   {input: 'eat', complete: false},
  // ]
  const [todos, setTodos] = useState([
    {
      input: "Hello! Add your first todo!",
      complete: true,
    },
  ]);

  const [todo, setTodo] = useState({ input: "", complete: false });

  const [tab, setTab] = useState("All");

  function handleAddTodo(newTodo, completed = false) {
    const newTodoList = [...todos, { input: newTodo, complete: completed }];
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleEditTodoValue(newInput, completed = false) {
    const newTodo = { input: newInput, complete: completed };
    setTodo(newTodo);
  }

  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    handleEditTodoValue(valueToBeEdited.input, valueToBeEdited.complete);
    handleDeleteTodo(index);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    setTodos(newTodoList);
    persistData(newTodoList);
  }

  function handleCompletedTodo(index) {
    let newTodoList = [...todos];
    let completedTodo = newTodoList[index];
    completedTodo["complete"] = !completedTodo["complete"];
    newTodoList[index] = completedTodo;
    setTodos(newTodoList);
  }

  function persistData(currTodos) {
    localStorage.setItem("todo-app", JSON.stringify({ todos: currTodos }));
  }

  function clearData() {
    const emptyTodo = [];
    setTodos(emptyTodo)
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem("todo-app")) {
      return;
    }
    console.log('here');
    let db = JSON.parse(localStorage.getItem("todo-app"));
    setTodos(db.todos);
  }, []);

  // const [todos, setTodos] = useState([]);
  // const [todoValue, setTodoValue] = useState('');

  // function persistData(newList) {
  //   localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  // }
  // function handleAddTodos(newTodo) {
  //   const newTodoList = [...todos, newTodo];
  //   setTodos(newTodoList);
  //   persistData(newTodoList);
  // }

  // function handleDeleteTodo(index) {
  //   const newTodoList = todos.filter((todo, todoIndex) => {
  //     return todoIndex !== index;
  //   });
  //   setTodos(newTodoList);
  //   persistData(newTodoList);
  // }

  // function handleEditTodo(index) {
  //   const valueToBeEdited = todos[index];
  //   setTodoValue(valueToBeEdited);
  //   handleDeleteTodo(index);
  // }

  // // page load does not need any dependencies
  // useEffect(() => {
  //   if (!localStorage) {
  //     return;
  //   }

  //   let localTodos = localStorage.getItem("todos");
  //   if (!localTodos) {
  //     return;
  //   }

  //   localTodos = JSON.parse(localTodos).todos;
  //   setTodos(localTodos);
  // }, []);

  return (
    <main>
      <Header todos={todos}></Header>
      <Tabs todos={todos} selectedTab={tab} setTab={setTab}></Tabs>
      <TodoInput
        todoValue={todo.input}
        todoComplete={todo.complete}
        handleEditTodoValue={handleEditTodoValue}
        handleEditTodo={handleEditTodo}
        // setTodoValue={setTodoValue}
        handleAddTodos={handleAddTodo}
        clearData={clearData}
      ></TodoInput>
      <TodoList
        handleDeleteTodo={handleDeleteTodo}
        handleCompletedTodo={handleCompletedTodo}
        handleEditTodo={handleEditTodo}
        todos={todos}
        tab={tab}
      ></TodoList>
    </main>
  );
}

export default App;
