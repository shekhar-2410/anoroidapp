import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../component/expensesoutput/ExpensesOutput";
import { GlobalStyles } from "../constatnts/styles";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";

const AllExpanses = () => {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={expensesCtx?.expenses}
        expensesPeriod={"Total"}
      />
    </View>
  );
};

export default AllExpanses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    padding: 12,
  },
});
