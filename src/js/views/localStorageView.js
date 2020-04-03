
//Create function to display local storage items in UI

import { displayItem } from "./inputView";
import { elements, values } from "./base";

//Create function to display totals in display
export const displayFromLocalStorage = () => {

    //Create storage variables
    let incomeItems;
    let expenseItems;
    let totals; 

    //check incomeItems for data
    if(localStorage.getItem("incomeItems") === null) {
        //If not set incomeItems to an empty array
        incomeItems = [];
    } else {
        //If there is set incomeItems to the value of whats in storage
        incomeItems = JSON.parse(localStorage.getItem("incomeItems"));
    }

    //Loop through incomeItems and display in UI
    incomeItems.forEach(item => {
        displayItem(item.transactionType, item.transactionName, item.transactionAmount);

    })


    //Check expenseItems for data
    if(localStorage.getItem("expenseItems") === null) {
        //If not set expenseItems to an empty array
        expenseItems = [];
    } else {
        //If there is set expenseItems to the value of whats in storage
        expenseItems = JSON.parse(localStorage.getItem("expenseItems"));
    }

    //Loop through expenseItems and display in UI
    expenseItems.forEach(item => {
        displayItem(item.transactionType, item.transactionName, item.transactionAmount);

    })

    //Get totals from storage
    totals = JSON.parse(localStorage.getItem("totals"));
    
    //Display current balance
    elements.balanceDisplay.textContent = totals.currBalance;
    //Display total income
    elements.budgetDisplay.textContent = totals.totIncome;
    //display total expense
    elements.statusDisplay.textContent = totals.totExpense;

    //Set calculation values
    values.currentBalance = totals.currBalance;
    values.totalIncome = totals.totIncome;
    values.totalExpense = totals.totExpense;

};