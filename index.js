/** @format */

import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import { Provider } from "react-redux";
import store from "./src/store";
import RootStack from "./src/routes";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
AppRegistry.registerComponent(appName, () => App);
