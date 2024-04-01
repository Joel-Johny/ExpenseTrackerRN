import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../Components/Expenses/ExpensesOutput";

function RecentExp() {
  return (
    <View style={{flex:1}}>
      <ExpensesOutput  period={"last 7 days"}/>
    </View>
  );
}

export default RecentExp;
