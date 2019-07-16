import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity
} from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class DetailsFruits extends Component {
  fruitsInBasket = () => {
    this.props.navigation.navigate("FruitsBasket");
  };

  fruitsQuantities = () => {
    this.props.navigation.navigate("FruitsQuantities");
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/fundo.jpg")}
          style={styles.imgFundo}
        />

        <View style={styles.content}>
          <Text style={styles.text}>Detalhes da fruta</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  imgFundo: {
    width: width,
    height: height
  },
  content: {
    width: 300,
    height: 400,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  }
});
