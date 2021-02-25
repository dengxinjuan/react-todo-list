//import { useState } from "react";

const Todo = ({ task = "throw trash", id = "1", remove }) => {
  return (
    <div>
      <li id={id}>{task}</li>
      <button onClick={() => remove(id)}>x</button>
    </div>
  );
};

export default Todo;
