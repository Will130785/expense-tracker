import axios from "axios";

//Creat exchange class
export default class Exchange {
    constructor(){

    }

    //Create method for api call
    async getResults() {

        //Try request to url
        try{
            let res = await axios(`http://data.fixer.io/api/latest?access_key=0a6cb4691c30900d4ac6a4701a28503d`);
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