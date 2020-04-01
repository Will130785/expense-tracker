//UI variables
export const elements = {
    balanceDisplay: document.querySelector("#curr-display"),
    budgetDisplay: document.querySelector("#budget-display"),
    statusDisplay: document.querySelector("#status-display"),
    incomeContainer: document.querySelector(".income__items"),
    expenseContainer: document.querySelector(".expense__items"),
    transName: document.querySelector("#transaction"),
    transAmount: document.querySelector("#transaction-amount"),
    transType: document.querySelector("#type"),
    transBtn: document.querySelector("#submit"),
    setBudget: "",
    budgBtn: ""
    
}

//Calculation variables
export const values = {
    currentBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
}

// //Storage data
// export const storage = {
//     incomeItem: [],
//     expenseItem: [],
//     totals: [],
// }
