//Create function to persist items to local storage

//Create function to remove items from local storage

//Create function to persist totals to local storage

export const setToLocalStorage = (type, name, amt) => {
    let incomeItems;
    let expenseItems;
    let totals;

    if(localStorage.getItem("incomeItems") === null) {
        incomeItems = [];
    } else {
        incomeItems = JSON.parse(localStorage.getItem("incomeItems"));
    }

    incomeItems.push(type, name, amt);

    localStorage.setItem("incomeItems", JSON.stringify(incomeItems));

};