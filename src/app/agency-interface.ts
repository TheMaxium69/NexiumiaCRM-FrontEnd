import {ClientInterface} from "./client-interface";

export interface AgencyInterface {
    id:number;
    name:string;
    siret:string;
    path:string;
    color:string;
    email:string;
    phone:string;
    tva:string;
    clients:ClientInterface;
}

/*
  {
        "id": 1,
        "name": "test",
        "siret": "6546456546",
        "path": "/aeaz/zae",
        "color": "65464654",
        "email": "mxm@gmail.com",
        "phone": "064111",
        "tva": "5464654654"
    }
*/
