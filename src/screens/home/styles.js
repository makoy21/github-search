import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#C3C3C3",
    padding: 5,
    marginRight: 10,
  },
  errorText: {
    color: "red",
  },
  nextContainer: {
    marginHorizontal: 10,
    marginVertical: 8,
    backgroundColor: "#00ccff",
    alignItems: "center",
    justifyContent: "center",
  },
  next: {
    color: "#000",
    fontSize: 16,
    padding: 10,
  },
  starCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
