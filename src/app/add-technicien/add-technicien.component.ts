import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ProfessionService} from "../profession.service";
import {UserService} from "../user.service";
import {AppComponent} from "../app.component";
import {ProfessionInferface} from "../profession-inferface";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-technicien',
  templateUrl: './add-technicien.component.html',
  styleUrls: ['./add-technicien.component.css']
})
export class AddTechnicienComponent implements OnInit{

  constructor(
    private router: Router,
    private professionService: ProfessionService,
    private userService: UserService,
    private app: AppComponent
  ) { }

  professionAll: ProfessionInferface[]|any;

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    this.professionService.getProfessions(this.app.setURL(), this.app.createCorsToken()).subscribe(reponseProfessions => {
      this.professionAll = reponseProfessions;
    })

  }

  createTechni(form: NgForm){

    let firstName:string = form.value['firstName'];
    let lastName:string = form.value['lastName'];
    let email:string = form.value['email'];
    let professionID:number = form.value['profession'];
    let content:string = form.value['content'];

    let bodyNoJsonTechni: any = {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "profession":professionID,
      // "content":content
    };
    const bodyTechni = JSON.stringify(bodyNoJsonTechni);

    this.userService.postUserTechni(bodyTechni, this.app.setURL(), this.app.createCorsToken()).subscribe(reponseCreateTechni => {

       if(reponseCreateTechni['status'] == true){
          alert("CREER");
         this.router.navigate(['/admin']);
       } else if (reponseCreateTechni['status'] == false){
          alert(reponseCreateTechni['message']);
       } else {
         alert("err");
       }

    })

  }



}
