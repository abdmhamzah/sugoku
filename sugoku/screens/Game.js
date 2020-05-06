import React from "react";
import { StyleSheet, View } from "react-native";
import { Board } from "../components";

export default () => {
  return (
    <View style={styles.container}>
      <Board />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "grey",
    justifyContent: "center",
  },
});
