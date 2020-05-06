import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "stretch",
    marginTop: 5,
  },
});
