import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from "react-native";

export default ({ navigation, route }) => {
  const { names, level, time } = route.params;

  function toHome() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/sudoku.png")} style={styles.img} />
      <Text style={styles.title}>Thankyou For Playing</Text>
      <View style={styles.report}>
        <Text style={styles.subtitle}>Game Report:</Text>
        <Text style={styles.player}>Name: {names} </Text>
        <Text style={styles.player}>Level: {level} </Text>
        <Text style={styles.player}>Time: {time} </Text>
      </View>
      <TouchableOpacity onPress={toHome} style={styles.finishBtn}>
        <Text style={styles.textBtn}>Play Again?</Text>
      </TouchableOpacity>
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
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  report: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 2.5,
    marginLeft: 10,
    marginRight: 10,
  },
  title: {
    marginBottom: 5,
    fontSize: 35,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
  },
  player: {
    color: "grey",
    marginBottom: 5,
    fontSize: 15,
  },
  finishBtn: {
    backgroundColor: "#2096F3",
    alignItems: "center",
    marginTop: 2.5,
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    borderRadius: 5,
    alignSelf: "stretch",
  },
  textBtn: {
    color: "white",
  },
});
