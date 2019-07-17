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

export default class DetailsFruits extends Component {
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
              size={20}
              color={"#F5923B"}
              style={styles.espaco}
            />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Informações do cliente</Text>
        </View>
        <View style={styles.content}>
          <View style={styles.detail}>
            <View style={styles.areaImg} />
            <Text style={styles.texto}>Nome</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF"
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
    color: "#F5923B",
    fontSize: 16
  },
  content: {
    width: width,
    height: height,
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 120,
    alignItems: "center"
  },
  detail: {
    width: 320,
    height: 210,
    backgroundColor: "#fff",
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    borderWidth: 0.3,
    borderColor: "#c4c4c4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 6
  },
  areaImg: {
    width: 300,
    height: 150,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#9e9e9e"
  },
  texto: {
    color: "#9e9e9e",
    fontSize: 24
  }
});
