import React, { Component } from "react";
import { SafeAreaView } from "react-native";
import { AppLoading, Font } from "expo";
import styles from "./style";
import Header from "./components/Header";
import Board from "./components/Board";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
      Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf")
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <Board />
      </SafeAreaView>
    );
  }
}
