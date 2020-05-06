const initialValue = {
  names: "Players",
};

function reducerPlayer(state = initialValue, action) {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, names: action.payload };
    default:
      return state;
  }
}

export default reducerPlayer;
