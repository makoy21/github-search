import React, { Component } from "react";
import { Linking } from "react-native";

import { connect } from "react-redux";

import List from "../../components/list";
import styles from "./styles";

class Details extends Component<Props> {
  _onPressItem = ({ html_url }) => {
    Linking.openURL(html_url).catch(err => console.error("error opening link", err));
  };
  render() {
    console;
    const { data } = this.props;
    return (
      <List
        data={data}
        onPressItem={this._onPressItem}
        selectedItems={new Map()}
        onPressItem={this._onPressItem}
      />
    );
  }
}

const mapStateToProps = state => {
  const { selectedItems } = state.repo;
  const data = [];
  for ([key, value] of selectedItems) {
    data.push(value);
  }
  return { data };
};
export default connect(mapStateToProps)(Details);
