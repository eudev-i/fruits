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
          source={require("../images/Wallpaper_orange.png")}
          style={styles.imgFundo}
        />

        <View style={styles.content}>
          <Image
            source={require("../images/img_fruits-app.png")}
            style={styles.imgLogo}
          />

          <View style={styles.areaButtons}>
            <TouchableOpacity activeOpacity={0.7} onPress={this.fruitsInBasket}>
              <View style={styles.button}>
                <Text style={styles.text}>FRUTAS NA CESTA</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.fruitsQuantities}
            >
              <View style={styles.button}>
                <Text style={styles.text}>FRUTAS E QUANTIDADES NA CESTA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000"
  },
  imgFundo: {
    width: width,
    height: height
  },
  content: {
    width: 400,
    height: 400,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  imgLogo: {
    width: 300,
    height: 200,
    marginBottom: 50,
    position: "absolute",
  },
  button: {
    width: 325,
    height: 45,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    color: "#F5923B"
  },
  areaButtons: {
    width: 320,
    height: 120,
    marginTop: 540
  }
});
