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

// Pegando todo o tamanho da tela do celular
const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class Home extends Component {
  // Direcionando para a tela de frutas na cesta
  fruitsInBasket = () => {
    this.props.navigation.navigate("FruitsBasket");
  };

  // Direcionando para a tela de frutas e quantidades
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
            {/* Botão que direciona para a tela de frutas na cesta */}
            <TouchableOpacity activeOpacity={0.7} onPress={this.fruitsInBasket}>
              <View style={styles.button}>
                <Text style={styles.text}>FRUTAS NA CESTA</Text>
              </View>
            </TouchableOpacity>

            {/* Botão que direciona para a tela de frutas ne quantidades */}
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
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
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
