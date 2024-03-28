import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  heading: {
    marginTop: 32,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subheading: {
    marginTop: 32,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "left",
    marginBottom: 8,
    marginLeft:8,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  input: {
    borderColor: "black",
    borderRadius: 24,
    borderWidth: 1,
    flex: 1,
    height: 48,
    padding: 16,
    marginRight: 16,
    backgroundColor: '#e1e1e1',
  },
  addBtn: {
    backgroundColor: "black",
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  addBtnText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  listArea: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    padding: 12,
    borderRadius: 8,
    marginBottom:8,
    borderColor: "black",
    borderWidth: 1,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionHeading: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 6,
    padding: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  itemTouchable: {
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 16,
    padding: 10,
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  deleteButton: {
    color: "red",
    marginLeft: 8,
  },
});

export default styles;
