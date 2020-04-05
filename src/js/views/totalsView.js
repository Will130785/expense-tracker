import {elements, values} from "./base";
//Create function to display totals in UI
export const displayTotals = () => {
    //Display current balance
    elements.balanceDisplay.textContent = `£${values.currentBalance.toFixed(2)}`;
    //Display total income
    elements.budgetDisplay.textContent = `£${values.totalIncome.toFixed(2)}`;
    //display total expense
    elements.statusDisplay.textContent = `£${values.totalExpense.toFixed(2)}`;


    //Check currentBalance to display in correct color
    if(values.currentBalance < 0) {
        elements.balanceDisplay.style.color = "red";
    } else if(values.currentBalance > 0) {
        elements.balanceDisplay.style.color = "green";
    } else {
        elements.balanceDisplay.style.color = "black";
    }


    //Check totalIncome to display in correct color
    if(values.totalIncome < 0) {
        elements.budgetDisplay.style.color = "red";
    } else if(values.totalIncome > 0) {
        elements.budgetDisplay.style.color = "green";
    } else {
        elements.budgetDisplay.style.color = "black";
    }


    //Check expenseTotal to display in correct color
    if(values.totalExpense < 0) {
        elements.statusDisplay.style.color = "green";
    } else if(values.totalExpense > 0) {
        elements.statusDisplay.style.color = "red";
    } else {
        elements.statusDisplay.style.color = "black";
    }
};