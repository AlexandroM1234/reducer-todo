import React, { useReducer, useState } from "react";

import { reducer, initialState } from "../Reducers/reducer";

const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [newToDo, setToDo] = useState("");
  const handleChanges = e => {
    setToDo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>To Do</label>
        <input
          name="newToDoTitle"
          type="text"
          value={newToDo}
          onChange={handleChanges}
        />
        <button
          onClick={() => {
            dispatch({ type: "ADD_TODO", payload: setToDo });
          }}
        >
          Create To-Do
        </button>
      </form>
    </div>
  );
};

export default ToDo;
