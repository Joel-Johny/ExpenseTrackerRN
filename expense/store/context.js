import { Children, createContext, useReducer } from "react";
import DummyExpenses from "../utils/dummy";

export const ExpenseCtx = createContext({});
function reducerFunction(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      const newObject = { id: id, ...action.payload };
      return [newObject, ...state];

    case "UPDATE":
      const idToUpdate = action.payload.id;
      const indexToUpdate = state.findIndex(
        (expense) => expense.id === idToUpdate
      );
      const updateObject = { ...state[indexToUpdate], ...action.payload.data };
      const updateState = [...state];
      updateState[indexToUpdate] = updateObject;
      return updateState;

    case "DELETE":
      const idToDelete = action.payload.id;
      return state.filter((expense)=>expense.id!=idToDelete)

    default:
      return state;
  }
}
export default function ExpenseProvider({ children }) {
  const [expenseState, dispatch] = useReducer(reducerFunction, DummyExpenses);
  function addExpense(name, amount, date) {
    dispatch({
      type: "ADD",
      payload: { name: name, amount: amount, date: date },
    });
  }
  function deleteExpense(expenseId) {
    dispatch({ type: "DELETE",payload:{id:expenseId} });
  }
  function updateExpense(expenseId,newName, newAmount) {
    dispatch({ type: "UPDATE",payload:{id:expenseId, data:{name: newName, amount: newAmount}} });
  }
  const values = {
    expenseState: expenseState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return <ExpenseCtx.Provider value={values}>{children}</ExpenseCtx.Provider>;
}
