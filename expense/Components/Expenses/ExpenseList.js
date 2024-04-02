import React from "react";
import { FlatList, View, Text } from "react-native";
import ExpenseItem from "./ExpenseItem";
function ExpenseList({ expenses }) {
  function renderExpenseDataItem(dataItem) {
    // console.log(dataItem.item.date);
    return <ExpenseItem dataItem={dataItem} />;
  }
  return (
    <FlatList
      style={{ marginTop: 10 }}
      data={expenses}
      renderItem={renderExpenseDataItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
