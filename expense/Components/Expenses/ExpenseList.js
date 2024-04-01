import React from "react";
import { FlatList, View,Text } from "react-native";
function ExpenseList({ expenses }) {
  function renderExpenseDataItem(dataItem) {
    console.log(dataItem.item.date)
    return (
      <View>
        <Text>{dataItem.item.name}</Text>
        <Text>{dataItem.item.amount}</Text>
        {/* <Text>{dataItem.item.date}</Text> */}
      </View>
    );
  }
  return (
      <FlatList
        data={expenses}
        renderItem={renderExpenseDataItem}
        keyExtractor={(item) => item.id}
      />
  );
}

export default ExpenseList;
