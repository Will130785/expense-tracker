import "../sass/main.scss";
import Exchange from "./models/Exchange";
import {elements, values} from "./views/base";
import {inputData} from "./models/Input";
import {storageTotals, calculateTotals} from "./models/Total";
import {displayItem, removeItemFromDisplay} from "./views/inputView";
import {displayTotals} from "./views/totalsView";
import {setToLocalStorage, setTotalsToLocalStorage, removeItemFromLocalStorage} from "./models/LocalStorage";
import {displayFromLocalStorage} from "./views/localStorageView";
import {displayRates} from "./views/exchangeView";


//hangle API call data
const getRates = async () => {
    
    //Instantiate a new exchange object
    let exchange = new Exchange();

    //await results of getResults call
    await exchange.getResults()
    //Display exchange rates in UI
    displayRates(exchange.res);
}

//Execute get rates function to immediately display rates
getRates();


//Add event listeners

//Event listener for DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    displayFromLocalStorage();
    displayTotals();
});

//Event listener for add transaction
elements.transBtn.addEventListener("click", e => {
    //prevent default button behaviour
    e.preventDefault();

    //Collect form data from inputs and store in inputData object
    inputData.transactionName = elements.transName.value;
    inputData.transactionAmount = Number(elements.transAmount.value);
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

    //Set totals to local storage
    setTotalsToLocalStorage(storageTotals);

    //Display totals
    displayTotals();

    //Clear inputs
    elements.transName.value = "";
    elements.transAmount.value = "";
    elements.transType.value = "";

});

//Event listener to remove item
elements.overallContainer.addEventListener("click", e => {

    //Remove item from the UI
    removeItemFromDisplay(e);
    //Remove item from local storage
    removeItemFromLocalStorage(e, e.target.previousElementSibling.previousElementSibling.textContent);

    //convert item amount to number
    let amt = Number(e.target.previousElementSibling.textContent);

    //check if item is an income item
    if(e.target.classList.contains("income__item--del")) {
        //Subtract income amount from overall balance
        values.currentBalance -= amt;
        //Subtract income amount from income total
        values.totalIncome -= amt;

    //Check if item is an expense item
    } else if(e.target.classList.contains("expense__item--del")) {
        //Add expense amount to current balance
        values.currentBalance += amt;
        //Subtract expense amount from total expense
        values.totalExpense -= amt;

    }

    //prepare updated totals for storage object
    storageTotals.currBalance = values.currentBalance;
    storageTotals.totIncome = values.totalIncome;
    storageTotals.totExpense = values.totalExpense;

    //Set updated totals to local storage
    setTotalsToLocalStorage(storageTotals);

    //Display updated totals in ui
    displayTotals();

});