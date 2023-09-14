import { createContext, useReducer } from "react";
const Dummy_ex = [
  {
    id: "1",
    description: "A pair of shoes",
    amt: 59.9,
    date: new Date("2023-01-19"),
  },
  {
    id: "2",
    description: "clothes",
    amt: 50,
    date: new Date("2023-09-10"),
  },
  {
    id: "3",
    description: "food",
    amt: 29.9,
    date: new Date("2023-09-11"),
  },
  {
    id: "4",
    description: "A pair of shoes",
    amt: 59.9,
    date: new Date("2023-06-19"),
  },
  {
    id: "5",
    description: "clothes",
    amt: 50,
    date: new Date("2023-09-02"),
  },
  {
    id: "6",
    description: "food",
    amt: 29.9,
    date: new Date("2023-07-11"),
  },
  {
    id: "7",
    description: "clothes",
    amt: 50,
    date: new Date("2023-09-09"),
  },
  {
    id: "8",
    description: "food",
    amt: 29.9,
    date: new Date("2023-06-11"),
  },
];
export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, date, amt }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, date, amt }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateableExpensIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatbleExpense = state[updateableExpensIndex];
      const updatedItem = { ...updatbleExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateableExpensIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_ex);

  function addExpense({ expensesData }) {
    dispatch({ type: "ADD", payload: expensesData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expensesData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expensesData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
