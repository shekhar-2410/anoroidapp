import { StyleSheet, Text, View } from "react-native";
import ExpensesOutput from "../component/expensesoutput/ExpensesOutput";
import { GlobalStyles } from "../constatnts/styles";
import { useContext } from "react";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDate } from "../util/date";

const RecentExpwnwses = () => {
  const expensesCtx = useContext(ExpensesContext);
  const recrentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDate(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });
  return (
    <View style={styles.container}>
      <ExpensesOutput
        expenses={recrentExpenses}
        expensesPeriod={"Last 7 Days before"}
      />
    </View>
  );
};

export default RecentExpwnwses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.background,
    padding: 12,
    marginTop: -16,
  },
});
