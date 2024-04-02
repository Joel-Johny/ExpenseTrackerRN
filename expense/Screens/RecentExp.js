import React, { useContext } from "react";
import { Text, View } from "react-native";
import ExpensesOutput from "../Components/Expenses/ExpensesOutput";
import { ExpenseCtx } from "../store/context";
import weekAgoDateFn from "../utils/weekAgoDate";

function RecentExp() {
  const ExpenseContext=useContext(ExpenseCtx)
  const weekAgoDate=weekAgoDateFn()
  // console.log(weekAgoDate)
  const weekAgoExpenses=ExpenseContext.expenseState.filter((expense)=>expense.date>=weekAgoDate)
  return (
    <View style={{flex:1}}>
      <ExpensesOutput expenses={weekAgoExpenses} period={"Last 7 Days"} fallbackText={"No Expenses in the last 7 Days"}/>
    </View>
  );
}

export default RecentExp;
