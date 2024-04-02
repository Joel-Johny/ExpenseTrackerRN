import { StyleSheet, View, Text, Pressable } from "react-native";

import React from "react";
import { GlobalStyles } from "../../constants/styles";
import { getDate } from "../../utils/dateFormat";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({ dataItem }) {
  const navigation = useNavigation();
  // console.log(dataItem.item.date);
  function handleItemUpdate() {
    navigation.navigate("ManageExp", { title: "Edit Expense",expenseId:dataItem.item.id});
  }
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity: 0.75 }}
      onPress={handleItemUpdate}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {dataItem.item.name}
          </Text>
          <Text style={styles.textBase}>{getDate(dataItem.item.date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{dataItem.item.amount}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    paddingHorizontal: 16,
    marginVertical: 8,
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 5,
    justifyContent: "space-between",
    elevation: 4,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  amountContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: "4",
    borderRadius: 4,
    minWidth: 70,
  },
  amount: {
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
