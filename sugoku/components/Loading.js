import React from "react";
import { StyleSheet, Image, View } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/loading.gif")} style={styles.img} />
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
  },
});
