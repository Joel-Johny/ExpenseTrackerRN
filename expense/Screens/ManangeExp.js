import React, { useContext, useEffect } from "react";
import { Text, View, StyleSheet,Button } from "react-native";
import { GlobalStyles } from "../constants/styles";
import IconButton from "../UI/IconButton";
import { ExpenseCtx } from "../store/context";

function ManageExp({ navigation, route }) {
  const title = route.params.title;
  const paramsObj=route.params
  const ExpenseContext=useContext(ExpenseCtx)
  // console.log(expenseId)
  const isEditing = title == "Edit Expense" ? true : false;
  function deleteExpenseItem(){
    // console.log("item deleted")
    ExpenseContext.deleteExpense(paramsObj.expenseId)
    navigation.goBack()
  }
  function closeModal(){
    console.log("Modal closed")
    navigation.goBack()

  }
  function handleAddorEdit(){
    console.log(" handleAddorEdit")
    if(isEditing)
      ExpenseContext.updateExpense(paramsObj.expenseId,"UpdatedName","updated$")
    else
      ExpenseContext.addExpense("AddTest","$test12",new Date())
      navigation.goBack()
  }
  useEffect(() => {
    navigation.setOptions({
      title: title,
    });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer} >
        <Button title="Cancel" onPress={closeModal}/>
        <Button title={isEditing?"Confirm Edit":"Add Expense"} onPress={handleAddorEdit}/>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            size={36}
            onPress={deleteExpenseItem}
            color={GlobalStyles.colors.error500}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
  buttonsContainer:{
    flexDirection:"row",
    gap:15,
    justifyContent:"center",
  }
});
