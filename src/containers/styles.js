import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  main: {
    marginLeft: 0,
    padding: 0,
    padding: 0
  },
  backIcon: {
    color: "#fff",
    marginLeft: 10
  },
  searchIcon: {
    color: "#fff",
    marginRight: 10
  },
  listHeaderText: {
    fontSize: 10,
    marginLeft: "auto",
    marginRight: "auto",
    width: 118,
    height: 19,
    color: "#666666",
    backgroundColor: "#fcf3e1",
    textAlign: "center",
    borderRadius: 3,
    marginTop: 16,
    marginBottom: 20
  },
  listItem: {
    width: "100%",
    marginLeft: 0,
    paddingLeft: 0,
    paddingRight: 0,
    marginRight: 0,
    height: 62,
    borderBottomWidth: 1
  },
  itemBody: {
    padding: 0
  },
  detailsRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 11,
    paddingBottom: 16,
    marginLeft: 0
  },
  date: {
    fontSize: 11,
    color: "#cfa0a0",
    borderRightWidth: 1,
    borderColor: "#e6e6e6",
    paddingRight: 15
  },
  name: {
    fontSize: 11,
    color: "#8c8c8c",
    fontStyle: "italic",
    borderRightWidth: 1,
    borderColor: "#e6e6e6",
    paddingRight: 15,
    paddingLeft: 5
  },
  profession: {
    fontSize: 11,
    color: "#8c8c8c",
    paddingLeft: 5
  },

  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#3e3e3e"
  },

  closeText: {
    fontSize: 11,
    color: "#39ace5",
    marginRight: 25
  }
});
