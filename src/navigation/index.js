import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import FruitsBasket from "../screens/FruitsBasket";
import FruitsQuantities from "../screens/FruitsQuantities";
import DetailsFruits from "../screens/DetailsFruits";

const AppNavigator = createStackNavigator(
  {
    Home,
    FruitsBasket,
    FruitsQuantities,
    DetailsFruits
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
