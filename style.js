import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#708090",
    alignItems: "center",
    justifyContent: "space-between"
  },
  /* Board styles */
  row: {
    flexDirection: "row"
  },
  resetIcon: {
    fontSize: 18,
    color: "#ffebcd"
  },
  resetButtonContainer: {
    flexDirection: "row",
    marginTop: 60,
    marginBottom: 60,
    backgroundColor: "#5DADE2",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  resetButtonText: {
    fontSize: 18,
    color: "#ffebcd",
    margin: 10,
    fontFamily: "Roboto_Bold"
  },
  /* Tile styles */
  tile: {
    borderWidth: 5,
    borderColor: "#708090",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#90EE90"
  },
  crossIcon: {
    fontSize: 65,
    color: "#fff19c"
  },
  circleIcon: {
    fontSize: 65,
    color: "#ff6d6d"
  }
});
