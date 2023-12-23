import React, { useContext } from "react";
import { Link,useHistory } from "react-router-dom";
import { gridContext } from "./GridContext";
import { sudokuSolver } from "./Algorithm";
import OutputCell from "./OutputCell";
import parchment_2 from "./parchment2.png"


function Output() {
  const [{ solnGrid }, dispatch] = useContext(gridContext);
  let Grid = JSON.parse(JSON.stringify([...solnGrid]));
  var arr = [];
  const history = useHistory();
  if (sudokuSolver(Grid)) {
    for (var x = 0; x < 9; x++) {
      for (var y = 0; y < 9; y++) {
        if (solnGrid[x][y] !== "") {
          var newValue = false;
        } else {
          newValue = true;
        }
        arr.push(
          <OutputCell row={x} col={y} newValue={newValue} value={Grid[x][y]} />
        );
      }
    }
    message="Woohoo...We solved it."
  } else {
    arr = null;
    var message = "Oops...This Sudoku Can't be solved";
    setTimeout(() => (history.push("/")), 2500);
  }

  return (
    <div className="output">
      <div className="output__message" >{message}</div>
      <form className="form">
        <div className="sudokuGrid">{arr}</div>
        <Link to="/" className="output__back">
          <div>Back</div>
        </Link>
        <div className="invisible__block"></div>
      </form>
    </div>
  );
}

export default Output;
