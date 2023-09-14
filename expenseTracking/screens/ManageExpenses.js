import { useContext, useLayoutEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import IconButton from "../ui/IconButton";
import { GlobalStyles } from "../constatnts/styles";
import Button from "../ui/Button";
import { ExpensesContext } from "../store/expenses-context";

const ManageExpenses = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEdditing = !!editedExpenseId;
  const expensesCtx = useContext(ExpensesContext);
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEdditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEdditing]);
  function deleteHandler() {
    expensesCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  }
  function confirmHandler() {
    if (isEdditing) {
      expensesCtx.updateExpense({
        id: "13",
        description: "Apple",
        amt: 59.9,
        date: new Date("2023-01-19"),
      });
    } else {
      expensesCtx.addExpense({
        id: "11",
        description: "Bananas",
        amt: 59.9,
        date: new Date("2023-01-19"),
      });
    }
    navigation.goBack();
  }
  function cancelHadler() {
    navigation.goBack();
  }
  return (
    <View style={styles.constainer}>
      <View style={styles.buttons}>
        <Button style={styles.buttonStyle} mode={"flat"} onPress={cancelHadler}>
          Cancel
        </Button>
        <Button style={styles.buttonStyle} onPress={confirmHandler}>
          {isEdditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEdditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon={"trash"}
            color={"#ff0505"}
            size={36}
            onPress={deleteHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpenses;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: "white",
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
});
