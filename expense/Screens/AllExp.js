import React from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../Components/Expenses/ExpensesOutput";

function AllExp() {
  return (
    <View style={{flex:1}}>
      <ExpensesOutput  period={"total"}/>
    </View>
  );
}

export default AllExp;
