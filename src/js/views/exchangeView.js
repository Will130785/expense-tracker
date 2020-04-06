import {elements} from "./base";

//function to display rates in UI
export const displayRates = (rate) => {

    elements.ukpDisplay.textContent = rate.data.rates.GBP;
    elements.eurDisplay.textContent = rate.data.rates.HUF;
    elements.usdDisplay.textContent = rate.data.rates.USD;
    elements.candDisplay.textContent = rate.data.rates.CAD;
    elements.tbhtDisplay.textContent = rate.data.rates.THB;

};