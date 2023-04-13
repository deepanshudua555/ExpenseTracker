import { Text } from "react-native";
import ExpnsesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../strore/expenses-context";
import { getDateMinusDays } from "../util/date";
function RecentExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    console.log("expense.date");
    console.log(expense.date);
    console.log("today");
    console.log(today);

    return expense.date > date7DaysAgo && expense.date <= today;
  });
  return (
    <ExpnsesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 Days"
    />
  );
}

export default RecentExpenses;
