import Todo from "./Todo";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const INITIAL_STATE = [
    { id: 1, task: "shopping" },
    { id: 2, task: "cleaning" },
  ];
  const [todos, setTodos] = useState(INITIAL_STATE);

  const remove = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };

  const add = (newTodo) => {
    let p = { ...newTodo, id: uuid() };
    setTodos((todos) => [...todos, p]);
  };

  const todosDiv = todos.map((t) => (
    <Todo task={t.task} id={t.id} key={t.id} remove={remove} />
  ));

  return (
    <div>
      <h1>To Do list:</h1>
      <div>{todosDiv}</div>
      <div>
        <NewTodoForm add={add} />
      </div>
    </div>
  );
};

export default TodoList;
