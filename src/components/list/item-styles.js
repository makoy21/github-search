import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  infoContainer: {
    flex: 1,
    marginHorizontal: 8,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  repoName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  name: {
    fontSize: 14,
  },
  deleteButton: {
    position: "absolute",
    right: 10,
    top: 10,
    padding: 10,
  },
});

export default styles;
