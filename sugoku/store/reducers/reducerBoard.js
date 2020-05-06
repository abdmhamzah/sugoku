const initialValue = {
  board: [],
  tempBoard: [],
  level: "random",
  status: "unsolve",
  loading: true,
};

function reducerBoard(state = initialValue, action) {
  switch (action.type) {
    case "GET_BOARD":
      return {
        ...state,
        board: action.payload,
        tempBoard: JSON.parse(JSON.stringify(action.payload)),
        loading: false,
        status: null,
      };
    case "GET_SOLVE":
      return { ...state, tempBoard: action.payload, status: "solved" };
    case "GET_STATUS":
      return { ...state, status: action.payload };
    case "SET_LEVEL":
      return { ...state, level: action.payload };
    case "SET_BOARD":
      return { ...state, board: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export default reducerBoard;
