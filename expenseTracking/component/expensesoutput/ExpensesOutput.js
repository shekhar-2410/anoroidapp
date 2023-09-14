import { View,StyleSheet, FlatList } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensItem from "./ExpensItem";

function renderExpensesItem(itemdData) {
  return <ExpensItem {...itemdData.item} />;
}
const ExpensesOutput = ({ expensesPeriod, expenses }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      <FlatList
        data={expenses}
        renderItem={renderExpensesItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
});

export default ExpensesOutput;
