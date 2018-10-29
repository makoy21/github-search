import { createStackNavigator } from "react-navigation";
import Home from "./screens/home";
import Details from "./screens/details";

const RootStack = createStackNavigator(
  {
    Home,
    Details,
  },
  {
    initialRouteName: "Home",
  },
);

export default RootStack;
