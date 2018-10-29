import React, { PureComponent } from "react";
import { View, Text, Image, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "./item-styles";
const ANIMATION_DURATION = 250;
const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
class ListItem extends PureComponent {
  constructor(props) {
    super(props);
    this._animated = new Animated.Value(0);
  }
  componentDidMount() {
    this.animate();
  }
  animate = () => {
    Animated.timing(this._animated, {
      toValue: 1,
      duration: ANIMATION_DURATION,
      easing: Easing.linear,
    }).start();
  };
  _onPress = () => {
    const { item, onPress } = this.props;
    onPress(item);
  };
  _onPressDelete = () => {
    const { item, onPressDelete } = this.props;
    onPressDelete(item);
  };
  render() {
    const { item, selected, onPressDelete } = this.props;
    const { owner, name: repoName, stargazers_count } = item;
    const { avatar_url, login: name } = owner;
    const animateStyle = {
      marginLeft: this._animated.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0],
      }),
      backgroundColor: selected ? "#E4AF48" : "transparent",
    };
    return (
      <AnimatedTouchableOpacity
        style={[styles.container, animateStyle]}
        onPress={this._onPress}
      >
        <Image style={styles.avatar} source={{ uri: avatar_url }} />
        <View style={styles.infoContainer}>
          <Text style={styles.repoName}>{repoName}</Text>
          <Text style={styles.name}>{name}</Text>
          <Text>★ {stargazers_count}</Text>
        </View>
        {onPressDelete !== undefined ? (
          <TouchableOpacity style={styles.deleteButton} onPress={this._onPressDelete}>
            <Text style={styles.deleteText}>🗑️</Text>
          </TouchableOpacity>
        ) : null}
      </AnimatedTouchableOpacity>
    );
  }
}

export default ListItem;
