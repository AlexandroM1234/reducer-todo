import React from "react";
import ToDo from "./ToDo";
const ToDoList = props => {
  return (
    <div>
      {props.toDoList.map(task => (
        <ToDo key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ToDoList;
