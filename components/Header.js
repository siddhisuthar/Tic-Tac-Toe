import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.header_text}>Tic Tac Toe</Text>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    paddingTop: 40,
    paddingBottom: 5
  },
  header_text: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "#ffebcd",
    fontFamily: "Roboto_Bold"
  }
});
