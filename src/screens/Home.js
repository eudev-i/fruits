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

export default class Home extends Component {
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
          <View style={styles.areaLogo}>
            <Image
              source={require("../images/logo.jpg")}
              style={styles.imgLogo}
            />
          </View>

          <TouchableOpacity activeOpacity={0.7} onPress={this.fruitsInBasket}>
            <View style={styles.button}>
              <Text style={styles.text}>Frutas na cesta</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} onPress={this.fruitsQuantities}>
            <View style={styles.button}>
              <Text style={styles.text}>Frutas e quantidades na cesta</Text>
            </View>
          </TouchableOpacity>
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
  imgLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#fff",
    marginBottom: 50
  },
  button: {
    width: 300,
    height: 60,
    borderRadius: 20,
    backgroundColor: "#3f8c2a",
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 16,
    color: '#fff'
  }
});
