import {ClientInterface} from "./client-interface";
import {UserInterface} from "./user-interface";

export interface InterventionInterface {
  id:number;
  date:Date;
  information:string;
  title:string;
  state:string;
  client:ClientInterface;
  user:UserInterface;
}
