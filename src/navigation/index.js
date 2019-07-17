import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import FruitsBasket from "../screens/FruitsBasket";
import FruitsQuantities from "../screens/FruitsQuantities";

// Index de navegação de todas as telas do App, e indicando qual é a principal
const AppNavigator = createStackNavigator(
  {
    Home,
    FruitsBasket,
    FruitsQuantities
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
