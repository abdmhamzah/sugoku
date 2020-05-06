import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Loading } from ".";
import { getBoard } from "../store/actions/actionBoard";
import {
  solveBoard,
  validateBoard,
  updateBoard,
} from "../store/actions/actionBoard";
import { useNavigation } from "@react-navigation/native";
// import styles from "../styles";

const formatNumber = (number) => `0${number}`.slice(-2);

const getRemaining = (time) => {
  const mins = Math.floor(time / 60);
  const secs = time - mins * 60;
  return { mins: formatNumber(mins), secs: formatNumber(secs) };
};

export default () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { board, tempBoard, status, level, loading } = useSelector(
    (state) => state.reducerBoard
  );
  const { names } = useSelector((state) => state.reducerPlayer);
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const { mins, secs } = getRemaining(remainingSecs);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setRemainingSecs((remainingSecs) => remainingSecs + 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);

  useEffect(() => {
    dispatch(getBoard(level));
    setIsActive(!isActive);
  }, []);

  function toNewBoard() {
    dispatch(getBoard(level));
    setRemainingSecs(0);
    setIsActive(false);
    setIsActive(true);
  }

  function toSolveBoard() {
    setIsActive(false);
    const boardToSolve = { tempBoard };
    dispatch(solveBoard(boardToSolve));
  }

  function toValidateBoard() {
    const boardToValidate = { board };
    dispatch(validateBoard(boardToValidate));
  }

  function toFinish() {
    navigation.navigate("Finish", {
      names,
      level,
      time: `${mins}:${secs}`,
    });
  }

  function toUpdateBoard(input, rowIdx, colIdx) {
    board[rowIdx][colIdx] = Number(input);
    dispatch(updateBoard(board));
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <View>
      <View style={styles.container}>
        {status === "solved" ? (
          <Text style={styles.player}>
            Congratulations {names}! Your Sudoku is {status}
          </Text>
        ) : (
          <View style={styles.container}>
            <Text style={styles.player}>{names}</Text>
            <Text style={styles.player}>{`${mins}:${secs}`}</Text>
            <Text style={styles.player}>{status}</Text>
          </View>
        )}
      </View>
      {tempBoard.map((row, rowIdx) => (
        <View key={rowIdx} style={{ flexDirection: "row" }}>
          {row.map((col, colIdx) => {
            if (col === 0) {
              return (
                <View key={colIdx} style={styles.boxEmpty}>
                  <TextInput
                    onChangeText={(input) =>
                      toUpdateBoard(input, rowIdx, colIdx)
                    }
                    keyboardType="numeric"
                    placeholder="0"
                    style={styles.value}
                  ></TextInput>
                </View>
              );
            } else {
              return (
                <View key={colIdx} style={styles.boxFilled}>
                  <Text style={styles.valueEmpty}>{col}</Text>
                </View>
              );
            }
          })}
        </View>
      ))}
      <TouchableOpacity onPress={toValidateBoard} style={styles.validateBtn}>
        <Text style={styles.textBtn}>Check My Board</Text>
      </TouchableOpacity>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={toNewBoard} style={styles.resetBtn}>
          <Text style={styles.textBtn}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toSolveBoard} style={styles.solveBtn}>
          <Text style={styles.textBtn}>Do Magic</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={toFinish} style={styles.finishBtn}>
        <Text style={styles.textBtn}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#2096F3",
    borderRadius: 5,
    padding: 6,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 5,
  },
  title: {
    marginBottom: 5,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  player: {
    color: "white",
    fontSize: 15,
  },
  boxEmpty: {
    width: 40,
    height: 40,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    backgroundColor: "#ffff",
  },
  boxFilled: {
    width: 40,
    height: 40,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    backgroundColor: "skyblue",
  },
  value: {
    fontSize: 15,
    width: 40,
    height: 40,
    textAlign: "center",
  },
  valueEmpty: {
    fontSize: 15,
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "stretch",
    marginTop: 5,
  },
  textBtn: {
    color: "white",
  },
  validateBtn: {
    backgroundColor: "#2096F3",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
  },
  resetBtn: {
    flex: 1,
    backgroundColor: "#2096F3",
    alignItems: "center",
    marginRight: 2.5,
    padding: 10,
    borderRadius: 5,
  },
  solveBtn: {
    flex: 1,
    backgroundColor: "#2096F3",
    alignItems: "center",
    marginLeft: 2.5,
    padding: 10,
    borderRadius: 5,
  },
  finishBtn: {
    backgroundColor: "#606060",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
  },
});
