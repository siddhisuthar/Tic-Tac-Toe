import React, { Component } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { FontAwesome as Icon } from "react-native-vector-icons";
import { styles } from "../style";
import Tile from "./Tile";

export default class Board extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      grid: Array(3)
        .fill(0)
        .map(x => Array(3).fill(0)),
      currentPlayer: -1,
      active: true
    };
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  // Initialize/Reset game
  initGame = () => {
    this.setState({
      grid: Array(3)
        .fill(0)
        .map(x => Array(3).fill(0)),
      currentPlayer: -1
    });
  };

  handleOnClick(x, y) {
    const grid = this.state.grid;
    if (this.state.active) {
      if (grid[x][y] == 0) {
        grid[x][y] = this.state.currentPlayer;
        this.setState({
          grid: grid,
          currentPlayer: this.state.currentPlayer == 1 ? -1 : 1
        });
        let winner = this.checkWinner();
        if (winner == 1) {
          Alert.alert("Winner is Player 2");
          this.initGame();
        } else if (winner == -1) {
          Alert.alert("Winner is Player 1");
          this.initGame();
        }
      } else {
        Alert.alert("Please select an empty tile!");
      }
    }
  }

  checkWinner = () => {
    const MATRIX_ORDER = 3;
    let matrix = this.state.grid;
    var sum = 0;

    // Column check
    for (var j = 0; j < MATRIX_ORDER; j++) {
      sum = matrix[0][j] + matrix[1][j] + matrix[2][j];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    // Row check
    for (var i = 0; i < MATRIX_ORDER; i++) {
      sum = matrix[i][0] + matrix[i][1] + matrix[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }

    // Diagonals check
    sum = matrix[0][0] + matrix[1][1] + matrix[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }

    sum = matrix[2][0] + matrix[1][1] + matrix[0][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }
    
    return 0;
  };

  render() {
    const rows = this.state.grid.map((row, i) => {
      return (
        <View key={"row_" + i} style={styles.row}>
          {row.map((value, j) => {
            return (
              <Tile
                key={i + "_" + j}
                tileContent={value}
                onClick={() => this.handleOnClick(i, j)}
              />
            );
          })}
        </View>
      );
    });
    return (
      <View style={styles.board}>
        <View>{rows}</View>
        <View>
          <TouchableOpacity onPress={this.initGame} style={styles.resetButtonContainer}>
            <Text style={styles.resetButtonText}>Reset Game</Text>
            <Icon name="rotate-right" style={styles.resetIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
