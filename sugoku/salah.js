import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { Row } from "./components";
import { Provider } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { getBoard } from "./store/actions/actionBoard";
import store from "./store";

export default function App() {
  const dispatch = useDispatch();
  const { board } = useSelector((state) => state.reducerBoard);
  // const [board, setBoard] = useState([]);
  // const [row1, setRow1] = useState([]);
  // const [row2, setRow2] = useState([]);
  // const [row3, setRow3] = useState([]);
  // const [row4, setRow4] = useState([]);
  // const [row5, setRow5] = useState([]);
  // const [row6, setRow6] = useState([]);
  // const [row7, setRow7] = useState([]);
  // const [row8, setRow8] = useState([]);
  // const [row9, setRow9] = useState([]);

  useEffect(() => {
    // dispatch(getBoard())
    // fetch("https://sugoku.herokuapp.com/board?difficulty=hard")
    //   .then((res) => res.json())
    //   .then((data) => setBoard(data.board))
    //   .catch((err) => console.log(err));
    // setRow1(board[0]);
    // setRow2(board[1]);
    // setRow3(board[2]);
    // setRow4(board[3]);
    // setRow5(board[4]);
    // setRow6(board[5]);
    // setRow7(board[6]);
    // setRow8(board[7]);
    // setRow9(board[8]);
  }, []);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>{JSON.stringify(board)}</Text>

        {/* <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Row></Row>
        <Text>{ JSON.stringify(row1) }</Text>
        <Text>{ JSON.stringify(row2) }</Text>
        <Text>{ JSON.stringify(row3) }</Text>
        <Text>{ JSON.stringify(row4) }</Text>
        <Text>{ JSON.stringify(row5) }</Text>
        <Text>{ JSON.stringify(row6) }</Text>
        <Text>{ JSON.stringify(row7) }</Text>
        <Text>{ JSON.stringify(row8) }</Text>
        <Text>{ JSON.stringify(row9) }</Text> */}

        {/* {board.map((row) => {
        return (
          <View style={{ flexDirection: "row" }}>
            {row.map((column) => {
              return (
                <View>
                  <Text>{column}</Text>
                </View>
              );
            })}
          </View>
        );
      })} */}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
});
