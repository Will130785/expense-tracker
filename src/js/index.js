import "../sass/main.scss";
import {elements, values} from "./views/base";
import {inputData} from "./models/Input";
import {storageTotals, calculateTotals} from "./models/Total";
import {displayItem, removeItemFromDisplay} from "./views/inputView";
import {displayTotals} from "./views/totalsView";
import {setToLocalStorage, setTotalsToLocalStorage, removeItemFromLocalStorage} from "./models/LocalStorage";
import {displayFromLocalStorage} from "./views/localStorageView";

//import input data variables from Input.js
//import functions from inputView.js
//inport functions from Total.js
//inport functions from totalsView.js
//inport functions from LocalStorage.js
//import function from localStorageView.js




//Call function to display in UI

//Call function to save to local storage

//Call functions to calculate totals

//Call functions to display totals in UI

//Call function to store to local storage

//Call function to display local storage items in UI

//Call function to display local storage totals in UI





//Add event listeners

//Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", displayFromLocalStorage);

//Event listener for add transaction
elements.transBtn.addEventListener("click", e => {
    //prevent default button behaviour
    e.preventDefault();

    //Collect form data from inputs and store in inputData object
    inputData.transactionName = elements.transName.value;
    inputData.transactionAmount = elements.transAmount.value;
    inputData.transactionType = elements.transType.value;

    //Append transaction item to container
    displayItem(inputData.transactionType, inputData.transactionName, inputData.transactionAmount);

    //Calculate totals
    calculateTotals(inputData.transactionType, inputData.transactionAmount);

    //Prepare totals for storage object
    storageTotals.currBalance = values.currentBalance;
    storageTotals.totIncome = values.totalIncome;
    storageTotals.totExpense = values.totalExpense;

    //Set items and totals to local storage
    setToLocalStorage(inputData);

    setTotalsToLocalStorage(storageTotals);

    //Display totals
    displayTotals();

});

//Event listener to remove item
elements.overallContainer.addEventListener("click", e => {

    removeItemFromDisplay(e);
    removeItemFromLocalStorage(e, e.target.previousElementSibling.previousElementSibling.textContent);

    let amt = Number(e.target.previousElementSibling.textContent);

    if(e.target.classList.contains("income__item--del")) {
        values.currentBalance -= amt;
        values.totalIncome -= amt;

    } else if(e.target.classList.contains("expense__item--del")) {
        values.currentBalance += amt;
        values.totalExpense -= amt;

    }

    console.log(amt);

    storageTotals.currBalance = values.currentBalance;
    storageTotals.totIncome = values.totalIncome;
    storageTotals.totExpense = values.totalExpense;

    setTotalsToLocalStorage(storageTotals);

    displayTotals();

});