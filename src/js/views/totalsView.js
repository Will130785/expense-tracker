import {elements, values} from "./base";
//Create function to display totals in UI
export const displayTotals = () => {
    //Display current balance
    elements.balanceDisplay.textContent = values.currentBalance;
    //Display total income
    elements.budgetDisplay.textContent = values.totalIncome;
    //display total expense
    elements.statusDisplay.textContent = values.totalExpense;

};