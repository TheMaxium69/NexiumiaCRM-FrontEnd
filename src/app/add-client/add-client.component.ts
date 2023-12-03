import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {AgencyService} from "../agency.service";
import {AgencyInterface} from "../agency-interface";
import {NgForm} from "@angular/forms";
import {ClientService} from "../client.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  agencyALL: AgencyInterface[]|any;

  constructor(
    private router: Router,
    private agencyService: AgencyService,
    private clientService: ClientService,
    private app: AppComponent
  ) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    this.agencyService.getAgencys(this.app.setURL(), this.app.createCorsToken()).subscribe(reponseAgence => {
      this.agencyALL = reponseAgence;
    })

  }

  createClient(form: NgForm){

    let firstName:string = form.value['firstName'];
    let lastName:string = form.value['lastName'];
    let email:string = form.value['email'];
    let phone:string = form.value['phone'];
    let address:string = form.value['address'];
    let agencyID:number = form.value['agency'];
    let state:string = form.value['state'];
    let content:string = form.value['content'];

    let bodyNoJsonClient: any = {
      "firstName":firstName,
      "lastName":lastName,
      "email":email,
      "phone":phone,
      "address":address,
      "agency":agencyID,
      "state": state,
      "information":content
    };
    const bodyClient = JSON.stringify(bodyNoJsonClient);

    this.clientService.postClient(bodyClient, this.app.setURL(), this.app.createCorsToken()).subscribe(reponseCreateClient => {

      if(reponseCreateClient['status'] == true){
        alert("CREER");
        this.router.navigate(['/admin']);
      } else if (reponseCreateClient['status'] == false){
        alert(reponseCreateClient['message']);
      } else {
        alert("err");
      }

    })

  }

}
