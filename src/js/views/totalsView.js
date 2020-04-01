import {elements, values} from "./base";
//Create function to display totals in UI
export const displayTotals = () => {
    elements.balanceDisplay.textContent = values.currentBalance;
    elements.budgetDisplay.textContent = values.totalIncome;
    elements.statusDisplay.textContent = values.totalExpense;

};