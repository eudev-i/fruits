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

export default class FruitsBasket extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../images/fundo.jpg")}
          style={styles.imgFundo}
        />

        <View style={styles.content}>
          <Text style={styles.text}>Frutas na cesta</Text>
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
    height: 300,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: 260,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    color: "#fff"
  }
});
