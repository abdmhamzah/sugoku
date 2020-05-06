import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useDispatch } from "react-redux";
import { setNamePlayer } from "../store/actions/actionPlayer";
import { setLevel } from "../store/actions/actionBoard";

export default ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function toEasyBoard() {
    let namePlayer = name;
    if (!namePlayer || namePlayer === "") {
      alert("Name must Filled");
    } else {
      dispatch(setNamePlayer(namePlayer));
      dispatch(setLevel("easy"));
      navigation.navigate("Game");
      setName("");
    }
  }

  function toMedBoard() {
    let namePlayer = name;
    if (!namePlayer || namePlayer === "") {
      alert("Name must Filled");
    } else {
      dispatch(setNamePlayer(namePlayer));
      dispatch(setLevel("medium"));
      navigation.navigate("Game");
      setName("");
    }
  }

  function toHardBoard() {
    let namePlayer = name;
    if (!namePlayer || namePlayer === "") {
      alert("Name must Filled");
    } else {
      dispatch(setNamePlayer(namePlayer));
      dispatch(setLevel("hard"));
      navigation.navigate("Game");
      setName("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orion-Sudoku</Text>
      <Image source={require("../assets/sudoku.png")} style={styles.img} />
      <Text style={styles.subtitle}>Welcome {name}!</Text>
      <TextInput
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.value}
        placeholder="Enter Your Name"
        placeholderTextColor="white"
      ></TextInput>
      <Text style={styles.subtitle}>Choose Level:</Text>
      <View style={styles.buttonGroup}>
        <TouchableOpacity onPress={toEasyBoard} style={styles.easyBtn}>
          <Text style={styles.textBtn}>Easy</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toMedBoard} style={styles.medBtn}>
          <Text style={styles.textBtn}>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toHardBoard} style={styles.hardBtn}>
          <Text style={styles.textBtn}>Hard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "grey",
  },
  img: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  title: {
    marginBottom: 30,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  value: {
    fontSize: 15,
    color: "white",
    width: 200,
    height: 40,
    textAlign: "center",
    marginTop: 5,
    marginBottom: 20,
    borderWidth: 0.5,
    borderRadius: 3,
    borderColor: "white",
  },
  submitBtn: {
    backgroundColor: "#606060",
    alignItems: "center",
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
  },
  textBtn: {
    color: "white",
  },
  buttonGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "stretch",
    marginTop: 5,
    width: "80%",
    marginBottom: 10,
  },
  easyBtn: {
    flex: 1,
    backgroundColor: "#00AC4A",
    alignItems: "center",
    marginRight: 2.5,
    padding: 10,
    borderRadius: 5,
  },
  medBtn: {
    flex: 1,
    backgroundColor: "#FFBB00",
    alignItems: "center",
    marginRight: 2.5,
    marginLeft: 2.5,
    padding: 10,
    borderRadius: 5,
  },
  hardBtn: {
    flex: 1,
    backgroundColor: "#FF2728",
    alignItems: "center",
    marginLeft: 2.5,
    padding: 10,
    borderRadius: 5,
  },
});
