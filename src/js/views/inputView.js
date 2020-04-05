import {elements} from "./base";
//create function to display input data in UI
export const displayItem = (type, item, amt) => {
    //Declare html variable
    let html;

    //Check the type that has been selected
    if(type === "income") {
        //If type is income, append the income item to the income container
        html = `
    <div class="income__item">
        <span class="income__item--pos">+</span><span class="income__item--name">${item}</span><span class="income__item--cur">£</span><span class="income__item--am">${amt.toFixed(2)}</span><span class="income__item--del">X</span>
    </div> 
    `
    elements.incomeContainer.insertAdjacentHTML("beforeend", html);

    } else {
        //If type is expense, append the expense item to the expense container
        html = `
    <div class="expense__item">
        <span class="expense__item--pos">-</span><span class="expense__item--name">${item}</span><span class="expense__item--cur">£</span><span class="expense__item--am">${amt.toFixed(2)}</span><span class="expense__item--del">X</span>
    </div> 
    `
    elements.expenseContainer.insertAdjacentHTML("beforeend", html);
    }

    return html;
}

//function to remove input data from UI
export const removeItemFromDisplay = e => {
    //Check delete button was clicked
    if(e.target.classList.contains("income__item--del") || e.target.classList.contains("expense__item--del")) {
        //Remove element from UI
        e.target.parentElement.remove();
    } 

}