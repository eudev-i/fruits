import React, { Component } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { imgFruits } from "../aux";
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

export default class FruitsBasket extends Component {
  constructor() {
    super();
    this.state = {
      fruits: []
    };
  }

  componentWillMount() {
    axios.get("https://api-pesada.herokuapp.com/fruits").then(res => {
      this.setState({ fruits: res.data.fruits });
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
          <FlatList
            data={this.state.fruits}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.fruit}>
                <Image source={imgFruits(item.name)} style={styles.imgFruits} />
                <Text style={styles.nameFruits}>{item.name}</Text>
                <View style={styles.btnDetails}>
                  <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={this.detailsFruits}
                  >
                    <Text style={styles.textDetails}>DETALHES</Text>
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
    backgroundColor: "#fff"
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
    paddingRight: 10,
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
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#000"
  },
  imgFruits: {
    width: 130,
    height: 150,
    marginBottom: 10
  },
  nameFruits: {
    fontSize: 24,
    color: "#9e9e9e",
    marginBottom: 10
  },
  btnDetails: {
    width: 110,
    height: 30,
    borderRadius: 4,
    backgroundColor: "#ffe2c9",
    justifyContent: "center",
    alignItems: "center"
  },
  textDetails: {
    color: "#F5923B",
    fontSize: 14
  }
});
