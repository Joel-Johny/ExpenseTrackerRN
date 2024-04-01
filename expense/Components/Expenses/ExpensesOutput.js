import React from 'react'
import { View, Text,StyleSheet } from "react-native";
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';
import { GlobalStyles } from '../../constants/styles';
const DummyExpenses=[
    {id:'e1',name:"shoes",amount:"45",date:new Date('24-04-2022')},
    {id:'e2',name:"pants",amount:"43",date:new Date('24-05-2022')},
    {id:'e3',name:"socks",amount:"3",date:new Date('2-05-2022')},
    {id:'e4',name:"jwellery",amount:"300",date:new Date('29-05-2022')},
    {id:'e5',name:"car",amount:"3000",date:new Date('9-05-2022')},
]
function ExpensesOutput({expenses,period}) {
  return (
    <View style={styles.container}>
        <ExpenseSummary expenses={DummyExpenses} period={period}/>
        <ExpenseList expenses={DummyExpenses}/>
    </View>
    )
}

export default ExpensesOutput
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:GlobalStyles.colors.primary700,
    }
})