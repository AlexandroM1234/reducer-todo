import React from "react";
import ToDo from "./ToDo";
const ToDoList = props => {
  return (
    <div>
      {props.toDoList.map(task => (
        <ToDo task={task} />
      ))}
    </div>
  );
};

export default ToDoList;
