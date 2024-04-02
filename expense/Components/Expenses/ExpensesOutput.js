import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { GlobalStyles } from "../../constants/styles";


function ExpensesOutput({ expenses, period,fallbackText }) {
  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} period={period} />
      {expenses.length==0?
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>{fallbackText}</Text>
      </View>
    :
    <ExpenseList expenses={expenses} />
    }
    </View>
  );
}

export default ExpensesOutput;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  fallbackContainer:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  fallbackText:{
    fontSize:16,
    color:"white",
    fontWeight:"bold"
  }
});
