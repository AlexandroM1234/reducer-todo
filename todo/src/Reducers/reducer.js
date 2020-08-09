export const initialState = [
  {
    toDo: "Make Calzones",
    completed: false,
    id: new Date()
  }
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDo: action.payload
      };
    default:
      return state;
  }
};
