import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import styles from "./style";
import { FontAwesome as Icon } from "react-native-vector-icons";

export default class Tile extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.tile} onPress={this.props.onClick}>
        {(() => {
          switch (this.props.tileContent) {
            case 1:
              return <Icon name="circle-o" style={styles.circleIcon} />;
            case -1:
              return <Icon name="times" style={styles.crossIcon} />;
            default:
              return <View />;
          }
        })()}
      </TouchableOpacity>
    );
  }
}
