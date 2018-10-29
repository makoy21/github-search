import React, { Component } from "react";
import { Text, View, TextInput, ActivityIndicator, TouchableOpacity } from "react-native";

import { connect } from "react-redux";

import styles from "./styles";
import List from "../../components/list";
import * as RepoActions from "../../actions/repo";

type Props = {
  data: Array<Object>,
  fetching: boolean,
  fetchRepo: Function,
  selectRepo: Function,
};

class Home extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isInvalidInput: false,
      searchText: "",
    };
  }
  _onChangeText = text => {
    let isInvalidInput = /[A-Z]/g.test(text);
    this.setState({ searchText: text, isInvalidInput }, this.doSearch);
  };
  doSearch = () => {
    const { isInvalidInput } = this.state;
    if (isInvalidInput) {
      return;
    }
    const { fetching, fetchRepo } = this.props;
    setTimeout(() => {
      if (!fetching) {
        const { searchText } = this.state;
        if (searchText) {
          fetchRepo(searchText);
        }
      }
    }, 500); // debounce call
  };
  _onPressItem = ({ id, ...others }) => {
    this.props.toggleRepo([id, { id, ...others }]);
  };
  getTotalStar = () => {
    const { selectedItems } = this.props;
    let totalStar = 0;
    for ([key, value] of selectedItems) {
      totalStar += value.stargazers_count;
    }
    return totalStar;
  };
  _onPressDeleteItem = ({ id, ...others }) =>
    this.props.deleteRepo([id, { id, ...others }]);
  _onPressNext = () => this.props.navigation.navigate("Details");
  render() {
    const { isInvalidInput, totalStar } = this.state;
    const { fetching, data, selectedItems } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            onChangeText={this._onChangeText}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
            autoCorrect={false}
            returnKeyType="search"
            onSubmitEditing={this.doSearch}
          />
          <ActivityIndicator animating={fetching} color="#0F0" />
        </View>
        {isInvalidInput && (
          <Text style={styles.errorText}>Only lowercase letters is allowed!</Text>
        )}
        <List
          data={data}
          onPressItem={this._onPressItem}
          extraData={selectedItems}
          selectedItems={selectedItems}
          onPressDeleteItem={this._onPressDeleteItem}
        />
        <Text style={styles.starCount}>Total start: {this.getTotalStar()}</Text>
        <TouchableOpacity style={styles.nextContainer} onPress={this._onPressNext}>
          <Text style={styles.next}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { fetching, items, errorMessage, selectedItems } = state.repo;
  return {
    data: items,
    fetching,
    errorMessage,
    selectedItems,
  };
};
const mapDispatchToProp = dispatch => ({
  fetchRepo: payload => dispatch(RepoActions.fetchRepo(payload)),
  toggleRepo: payload => dispatch(RepoActions.toggleRepo(payload)),
  deleteRepo: payload => dispatch(RepoActions.deleteRepo(payload)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProp,
)(Home);
