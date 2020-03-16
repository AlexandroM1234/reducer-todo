import React from "react";

const ToDo = props => {
  console.log(props.task);
  return (
    <div>
      <p>{props.task.toDo}</p>
    </div>
  );
};

export default ToDo;
