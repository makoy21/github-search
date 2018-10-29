import React, { Component } from "react";
import { FlatList } from "react-native";

import styles from "./item-styles";
import ListItem from "./item";

type Props = {
  data: Array<Object>,
  onPressItem: Function,
  selectedItems: Array<Map<string, number>>,
};
class List extends Component {
  _keyExtractor = item => item.id.toString();
  _renderItem = ({ item }) => (
    <ListItem
      item={item}
      onPress={this.props.onPressItem}
      onPressDelete={this.props.onPressDeleteItem}
      selected={this.isSelected(item)}
    />
  );
  isSelected = item => this.props.selectedItems.has(item.id);
  render() {
    const { data, ...others } = this.props;
    return (
      <FlatList
        keyExtractor={this._keyExtractor}
        data={data}
        renderItem={this._renderItem}
        {...others}
      />
    );
  }
}

export default List;
