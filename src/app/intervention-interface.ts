import {ClientInterface} from "./client-interface";
import {UserInterface} from "./user-interface";

export interface InterventionInterface {
  date:string;
  information:string;
  title:string;
  state:string;
  client:ClientInterface;
  user:UserInterface;
}
