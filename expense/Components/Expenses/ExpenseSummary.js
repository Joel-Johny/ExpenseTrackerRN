import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
function ExpenseSummary({expenses,period}) {
  let sum=0
  expenses.forEach(expense => {
    sum=sum+parseInt(expense.amount)
  })
  return (
    <View style={styles.container}>
      <Text style={styles.period}>{period}</Text>
      <Text style={styles.sum}>${sum}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles=StyleSheet.create({
  container:{
    padding:12,
    backgroundColor:GlobalStyles.colors.primary50,
    borderRadius:5,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center"
  },
  period:{
    fontSize:14,
    color:GlobalStyles.colors.primary400
  },
  sum:{
    fontSize:14,
    fontWeight:"bold",
    color:GlobalStyles.colors.primary500
  }
})