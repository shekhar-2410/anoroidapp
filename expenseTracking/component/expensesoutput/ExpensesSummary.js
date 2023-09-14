import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constatnts/styles";

const ExpensesSummary = ({ periodName, expenses }) => {
  const expensesSum = expenses.reduce((sum, expnese) => {
    return (sum += expnese.amt);
  }, 0);
  return (
    <View style={styles.constaier}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpensesSummary;
const styles = StyleSheet.create({
  constaier: {
    padding: 8,
    backgroundColor: "white",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  period: {
    fontSize: 16,
    color: GlobalStyles.colors.primary400,
  },
  sum: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
  },
});
