import React from "react";

function OutputCell({ row, col,newValue, value}) {
  const style = { borderBottom: "", borderRight: "" };
  if (row === 2 || row === 5) {
    style.borderBottom = "3px solid #ff7129";
  }
  if (col === 2 || col === 5) {
    style.borderRight = "3px solid #ff7129";
  }
  // console.log(newValue);
  if (newValue) {
    style.color = "#d6a40e";
  }
  else {
    style.color = "white";
  }
  return (
    <div>
      <input
        type="text"
        readOnly={true}
        style={style} 
        value={value}
        className="cell"
      />
    </div>
  );
}

export default OutputCell;
