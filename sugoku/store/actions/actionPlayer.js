export function setNamePlayer(name) {
  return (dispatch, getState) => {
    dispatch({ type: "SET_NAME", payload: name });
  };
}
