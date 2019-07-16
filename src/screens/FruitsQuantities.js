import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { imgFruitsQuant } from "../aux";
import {
  Platform,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  TouchableOpacity,
  FlatList
} from "react-native";

const width = Dimensions.get("screen").width;
const height = Dimensions.get("screen").height;

export default class FruitsQuantities extends Component {
  constructor() {
    super();
    this.state = {
      basket: []
    };
  }

  componentWillMount() {
    axios.get("https://api-pesada.herokuapp.com").then(res => {
      this.setState({ basket: res.data.basket });
    });
  }

  home = () => {
    this.props.navigation.navigate("Home");
  };

  detailsFruits = () => {
    this.props.navigation.navigate("DetailsFruits");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity activeOpacity={0.9} onPress={this.home}>
            <Icon
              name="md-arrow-round-back"
              size={30}
              color={"#fff"}
              style={styles.espaco}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Frutas e quantidade</Text>
        </View>

        <View style={styles.content}>
          <FlatList
            data={this.state.basket}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.fruit}>
                <Image
                  source={imgFruitsQuant(item.type)}
                  style={styles.imgFruits}
                />
                <View style={styles.titulo}>
                  <Text style={styles.nameFruits}>{`${item.quantity} ${
                    item.type
                  }`}</Text>
                </View>
                <View style={styles.btnDetails}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.detailsFruits}
                  >
                    <Text style={styles.textDetails}>Detalhes</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3f8c2a"
  },
  header: {
    width: width,
    height: 40,
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 15,
    paddingTop: 10
  },
  espaco: {
    marginRight: 50
  },
  textHeader: {
    color: "#fff",
    fontSize: 22
  },
  content: {
    width: width,
    height: height,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 120
  },
  fruit: {
    width: 150,
    height: 280,
    backgroundColor: "#fff",
    flexDirection: "column",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 20
  },
  imgFruits: {
    width: 110,
    height: 150,
    marginBottom: 10
  },
  nameFruits: {
    fontSize: 20,
    color: "#000",
    marginBottom: 10
  },
  btnDetails: {
    width: 110,
    height: 30,
    borderRadius: 10,
    backgroundColor: "#def2d8",
    justifyContent: "center",
    alignItems: "center"
  },
  titulo: {
    flexDirection: "row"
  }
});
