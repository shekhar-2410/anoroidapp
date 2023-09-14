import { StyleSheet, Text, View, Pressable } from "react-native";
import { GlobalStyles } from "../../constatnts/styles";
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";
const ExpensItem = ({ description, date, amt, id }) => {
  const navigation = useNavigation();
  function expensePessHandler() {
    navigation.navigate("ManageExpenses", {
      expenseId: id,
    });
  }
  return (
    <Pressable
      onPress={expensePessHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expens}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={[styles.textBase]}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountCont}>
          <Text style={styles.amount}>{amt.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpensItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.75,
  },
  expens: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 3,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountCont: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    minWidth: 80,
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
  },
});
