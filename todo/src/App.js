import React from "react";
import "./App.css";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import { initialState } from "./Reducers/reducer";

function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <ToDoForm />
      <ToDoList toDoList={initialState} />
    </div>
  );
}

export default App;
