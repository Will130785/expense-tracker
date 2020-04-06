import axios from "axios";

//Creat exchange class
export default class Exchange {
    constructor(){

    }

    //Create method for api call
    async getResults() {

        //Try request to url
        try{
            let res = await axios(`https://api.exchangeratesapi.io/latest`);
            //if successful set this.res to result
            console.log(res);
            this.res = res;

        //catch errors
        } catch(error) {
            //if error, log to console
            console.log(error);

        }
    }
}