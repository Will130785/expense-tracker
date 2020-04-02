//Create function to persist items to local storage

//Create function to remove items from local storage

//Create function to persist totals to local storage

export const setToLocalStorage = (item) => {
    //Declare item and totals variables
    let incomeItems;
    let expenseItems;
    
    //Check if item is an income or an expense
    if(item.transactionType === "income") {

    //if income test to see if there is anything in storage for incomeItems
    if(localStorage.getItem("incomeItems") === null) {
        //If not set incomeItems to an empty array
        incomeItems = [];
    } else {
        //If there is set incomeItems to the value of whats in storage
        incomeItems = JSON.parse(localStorage.getItem("incomeItems"));
    }

    //Push new items to incomeItems variable
    incomeItems.push(item);

    //Set incomeItems back to local storage
    localStorage.setItem("incomeItems", JSON.stringify(incomeItems));

    } else {

    //If expense test to see if there is anything in storage for expenseItems
    if(localStorage.getItem("expenseItems") === null) {
        //If not set expenseItems to an empty array
        expenseItems = [];
    } else {
        //If there is set expenseItems to the value of whats in storage
        expenseItems = JSON.parse(localStorage.getItem("expenseItems"));
    }

    //Push new items to expenseItems variable
    expenseItems.push(item);

    //Set expenseItems back to local storage
    localStorage.setItem("expenseItems", JSON.stringify(expenseItems));
    }


};

//Function to save totals to local storage
export const setTotalsToLocalStorage = storeTotal => {
    let totals;

//Set totals variable to value of totalObj
totals = storeTotal;
//Set to local storage
localStorage.setItem("totals", JSON.stringify(totals));
}

//Function to remove item from local storage
export const removeItemFromLocalStorage = (e, desc) => {
    //Declare variables
    let incomeItems;
    let expenseItems;

    //Check if user clicked on delete income item
    if(e.target.classList.contains("income__item--del")) {
        
    //if income test to see if there is anything in storage for incomeItems
    if(localStorage.getItem("incomeItems") === null) {
        //If not set incomeItems to an empty array
        incomeItems = [];
    } else {
        //If there is set incomeItems to the value of whats in storage
        incomeItems = JSON.parse(localStorage.getItem("incomeItems"));
    }

    //loop through incomeItems array
    incomeItems.forEach((item, index) => {
        if(item.transactionName === desc) {
            //Using splice, remove the item from the incomeItems array
            incomeItems.splice(index, 1);

             //Set incomeItems back to local storage
            localStorage.setItem("incomeItems", JSON.stringify(incomeItems));
        }
    });

    //Check if user clicked on delete expense item
    } else if(e.target.classList.contains("expense__item--del")) {

    //If expense test to see if there is anything in storage for expenseItems
    if(localStorage.getItem("expenseItems") === null) {
        //If not set expenseItems to an empty array
        expenseItems = [];
    } else {
        //If there is set expenseItems to the value of whats in storage
        expenseItems = JSON.parse(localStorage.getItem("expenseItems"));
    }

    //Loop through expenseItems array
    expenseItems.forEach((item, index) => {
        if(item.transactionName === desc) {
            //Using splice remove item from expenseItems array
            expenseItems.splice(index, 1);

             //Set incomeItems back to local storage
            localStorage.setItem("expenseItems", JSON.stringify(expenseItems));
        }
    });

    }

}