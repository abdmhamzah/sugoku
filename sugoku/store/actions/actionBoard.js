const encodeBoard = (board) =>
  board.reduce(
    (result, row, i) =>
      result +
      `%5B${encodeURIComponent(row)}%5D${i === board.length - 1 ? "" : "%2C"}`,
    ""
  );

const encodeParams = (params) =>
  Object.keys(params)
    .map((key) => key + "=" + `%5B${encodeBoard(params[key])}%5D`)
    .join("&");

export function getBoard(difficulty) {
  let level;
  switch (difficulty) {
    case "easy":
      level = "easy";
      break;
    case "medium":
      level = "medium";
      break;
    case "hard":
      level = "hard";
      break;
    default:
      level = "random";
  }
  return (dispatch, getState) => {
    dispatch({ type: "SET_LOADING", payload: true });
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${level}`)
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_BOARD", payload: data.board }))
      .catch((err) => console.log(err));
  };
}

export function setLevel(level) {
  return (dispatch, setState) => {
    dispatch({ type: "SET_LEVEL", payload: level });
  };
}

export function updateBoard(data) {
  return (dispatch, setState) => {
    dispatch({ type: "SET_BOARD", payload: data });
  };
}

export function validateBoard(board) {
  return (dispatch, getState) => {
    fetch("https://sugoku.herokuapp.com/validate", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeParams(board),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_STATUS", payload: data.status }))
      .catch((err) => console.log(err));
  };
}

export function solveBoard(board) {
  return (dispatch, getState) => {
    fetch("https://sugoku.herokuapp.com/solve", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeParams(board),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_SOLVE", payload: data.solution }))
      .catch((err) => console.log(err));
  };
}
