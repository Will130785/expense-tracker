import {values} from "../views/base"
//create function/s to calculate totals

//Export functions

//Function to calculate totals
export const calculateTotals = (type, amount) => {

    //Check transaction type
    if(type === "income") {
        //If income add amount to total income and current balance
        values.totalIncome += Number(amount);
        values.currentBalance += Number(amount);

    } else {
        //If expense add amount to total expense and subtract from current balance
        values.totalExpense += Number(amount);
        values.currentBalance -= Number(amount);
    }

    console.log(values.currentBalance);
    console.log(values.totalIncome);
    console.log(values.totalExpense);

}

export const storageTotals = {

};