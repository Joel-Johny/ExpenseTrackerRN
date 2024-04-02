import React, { useContext } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../Components/Expenses/ExpensesOutput";
import { ExpenseCtx } from "../store/context";

function AllExp() {
  const ExpenseContext=useContext(ExpenseCtx)

  return (
    <View style={{flex:1}}>
      <ExpensesOutput expenses={ExpenseContext.expenseState} period={"Total"} fallbackText={"No expenses add One!"}/>
    </View>
  );
}

export default AllExp;
