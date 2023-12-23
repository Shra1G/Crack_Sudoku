import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import InputCell from "./InputCell";
import "./Input.css";
import { NumberValidator, SafetyValidator } from "./Algorithm";
import { gridContext } from "./GridContext";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function Input() {
  const [GlobalGrid, dispatch] = useContext(gridContext);
  let history = useHistory();
  const [grid, setGrid] = useState([
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", ""],
  ]);
  const addToGrid = (row, col, value) => {
    let copy = [...grid];
    if (value === "") {
      copy[row][col] = "";
    } else {
      copy[row][col] = Number(value);
    }
    setGrid(copy);
  };
  var arr = [];
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      arr.push(
        <div className="cell__container">
          <InputCell
            row={x}
            col={y}
            adder={addToGrid}
            placeholder={grid[x][y]}
          />
        </div>
      );
    }
  }

  const solve = (e) => {
    e.preventDefault();
    if (!grid.some((arr) => arr.some((elem) => elem !== ""))) {
      alert("You haven't given me any values yet");
    } else if (!NumberValidator([...grid])) {
      alert(
        "Invalid input recieved! \nEnter numeric values from 1 to 9 only!"
      );
    } else if (!SafetyValidator([...grid])) {
      alert("This is an INVALID Sudoku !!!!");
    } else {
      history.push("/solution");
      dispatch({
        type: "ASSIGN_GRID",
        grid: [...grid],
      });
    }
  };
  const clear = () => {
    let copy = Array(9)
      .fill("_")
      .map(() =>
        Array(9)
          .fill("_")
          .map(() => "")
      );
    setGrid(copy);
    dispatch({
      type: "ASSIGN_GRID",
      grid: [...copy],
    });
  };
  function showHelp() {
    var x = document.querySelector(".input__helpContent");
    if (x.style.opacity == 0) {
      x.style.visibility = "visible";
      x.style.opacity = 1;
      var y = setTimeout(() => {
        x.style.visibility = "hidden";
        x.style.opacity = 0;
      }, 2000);
    } else {
      x.style.visibility = "hidden";
      x.style.opacity = 0;
    }
  }
  return (
    <div className="input">
      <HelpOutlineIcon
        className="input__help"
        title="Help"
        onClick={showHelp}
      />
      <div
        className="input__helpContent"
      >
        Give me a Sudoku problem and
        <br /> I'll solve it for you.
      </div>
      <form className="form">
        <div className="sudokuGrid">{arr}</div>
        <input
          type="submit"
          value="Solve"
          onClick={solve}
          className="input__solve"
        />
        <input
          type="reset"
          value="Clear"
          onClick={clear}
          className="input__clear"
        />
      </form>
    </div>
  );
}

export default Input;
