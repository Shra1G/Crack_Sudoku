
export const NumberValidator = (grid) => {
  var flag = true;
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      if (
        grid[x][y] !== "" &&
        (isNaN(grid[x][y]) || grid[x][y] < 1 || grid[x][y] > 9)
      ) {
        flag = false;
      }
    }
  }
  return flag;
};
export const SafetyValidator = (grid) => {
  for (var x = 0; x < 9; x++) {
    for (var y = 0; y < 9; y++) {
      if (grid[x][y] !== "") {
        if (!isSafe(grid[x][y], x, y, grid)) {
          return false;
        }
      }
    }
  }
  return true;
};
export const isSafe = (value, row, col, grid) => {
  for (let y = 0; y < 9; y++) {
    if (y === col) {
      continue;
    }
    if (grid[row][y] === value) {
      return false;
    }
  }

  for (let x = 0; x < 9; x++) {
    if (x === row) {
      continue;
    }
    if (grid[x][col] === value) {
      return false;
    }
  }
  let c_start = Math.floor(col / 3) * 3;
  let r_start = Math.floor(row / 3) * 3;
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 3; y++) {
      if (r_start + x === row && c_start + y === col) {
        continue;
      }
      if (grid[r_start + x][c_start + y] === value) {
        return false;
      }
    }
  }
  return true;
};

const anyUnassigned = (Grid, pos) => {
  for (pos.row = 0; pos.row < 9; pos.row++) {
    for (pos.col = 0; pos.col < 9; pos.col++) {
      if (Grid[pos.row][pos.col] === "") {
        return true;
      }
    }
  }
  return false;
};

export const sudokuSolver = (Grid) => {
  let pos = { row: 0, col: 0 };
  if (!anyUnassigned(Grid, pos)) {
    return true;
  }
  for (let val = 1; val <= 9; val++) {
    if (!isSafe(val, pos.row, pos.col, Grid)) {
      continue;
    }
    Grid[pos.row][pos.col] = val;
    if (sudokuSolver(Grid)) {
      return true;
    }
    Grid[pos.row][pos.col] = "";
  }
  return false;
};