import React from "react";

function InputCell({ row, col, adder,placeholder}) {
  const style = { borderBottom: "", borderRight: "" };
  if (row === 2 || row === 5) {
    style.borderBottom = "3px solid #ff7129";
  }
  if (col === 2 || col === 5) {
    style.borderRight = "3px solid #ff7129";
  }
  const add = (e) => {
    adder(row, col, e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        maxLength="1"
        pattern="[1-9]{0,1}"
        style={style}
        placeholder={placeholder}
        onChange={add}
        className="cell"
      />
    </div>
  );
}

export default InputCell;
