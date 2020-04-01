import "../sass/main.scss";
import {elements, values} from "./views/base";
import {displayItem} from "./views/inputView";
import {calculateTotals} from "./models/Total";
import {displayTotals} from "./views/totalsView";
import {setToLocalStorage} from "./models/LocalStorage";

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

//Event listener for add transaction
elements.transBtn.addEventListener("click", e => {
    //prevent default button behaviour
    e.preventDefault();

    //Collect form data
    let transactionName = elements.transName.value;
    let transactionAmount = elements.transAmount.value;
    let transactionType = elements.transType.value;

    setToLocalStorage(transactionType, transactionName, transactionAmount);

    //Append transaction item to container
    displayItem(transactionType, transactionName, transactionAmount);


    //Calculate totals
    calculateTotals(transactionType, transactionAmount);
    //Display totals
    displayTotals();

});