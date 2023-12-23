export const initialState = {
  solnGrid: [
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ],
};

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ASSIGN_GRID":
      return {...state, solnGrid: [...action.grid] };
    default:
      return state;
  }
};

export default reducer;
