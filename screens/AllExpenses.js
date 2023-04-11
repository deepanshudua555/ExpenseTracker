import { Text } from "react-native";
import ExpnsesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../strore/expenses-context";
function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpnsesOutput
      expenses={expensesCtx.expenses}
      expensesPeriod="Total"
      fallbackText="No registered expenses found!!"
    />
  );
}

export default AllExpenses;
