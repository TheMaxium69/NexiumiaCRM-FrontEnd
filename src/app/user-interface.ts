import {InterventionService} from "./intervention.service";
import {ProfessionInferface} from "./profession-inferface";

export interface UserInterface {

  id:number,
  email:string,
  firstName:string,
  lastName:string
  interventions:InterventionService,
  roles:string[],
  profession:ProfessionInferface|any

}

/*
  {
      "id": 1,
      "email": "maxime.tournier@exemple.fr",
      "firstName": "Maxime",
      "lastName": "Tournier"
   }
*/
