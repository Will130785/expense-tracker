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
    overallContainer: document.querySelector(".expense-container"),
    ukpDisplay: document.querySelector("#ukp"),
    eurDisplay: document.querySelector("#eur"),
    usdDisplay: document.querySelector("#usd"),
    candDisplay: document.querySelector("#cand"),
    tbhtDisplay: document.querySelector("#tbht")
    
}

//Calculation variables
export const values = {
    currentBalance: 0,
    totalIncome: 0,
    totalExpense: 0,
}
