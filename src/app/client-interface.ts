import {AgencyInterface} from "./agency-interface";

export interface ClientInterface {
    id:number;
    firstName:string;
    lastName:string;
    email:string;
    phone:string;
    address:string;
    information:string;
    state:string;
    agency:AgencyInterface;
}

/*
  {
        "id": 1,
        "firstName": "Jean",
        "lastName": "Dupont",
        "email": "dupond1234@gmail.com",
        "phone": "0606060606",
        "address": "200 avenue jean jean",
        "information": "Un nouveau client en sais un gros con mais bon jaime la thune",
        "state": "Prospet"
    }
*/
