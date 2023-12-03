import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {AppComponent} from "../app.component";
import {ClientInterface} from "../client-interface";
import {NgForm} from "@angular/forms";
import {UserService} from "../user.service";
import {InterventionService} from "../intervention.service";
import {UserInterface} from "../user-interface";
import {InterventionInterface} from "../intervention-interface";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit{

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private app: AppComponent,
    private clientService: ClientService,
    private userService: UserService,
    private interventionService: InterventionService,
  ) { }

  clientSelected: ClientInterface|any;
  userAll: UserService[]|any;
  dateValue: string = this.app.curentDate.toISOString().split('T')[0];
  userConnected: UserInterface|any = this.app.userConnected;
  interventionAll: InterventionService[]|any
  interventionAllSelected: InterventionService[]|any = [];
  isInterventionSelected: boolean = false;

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    const cliendId: number|any = this.route.snapshot.paramMap.get('id');

    this.clientService.getClientOne(cliendId, this.app.setURL(),this.app.createCorsToken()).subscribe(client => {

      this.clientSelected = client;
      if (!this.clientSelected){
        this.router.navigate(['/404']);
      }
      // console.log(this.clientSelected);

    })

    this.userService.getUsers(this.app.setURL(),this.app.createCorsToken()).subscribe(users => {
      this.userAll = users;
    })

    this.interventionService.getInterventions(this.app.setURL(),this.app.createCorsToken()).subscribe(interventions => {

      this.interventionAll = interventions;

      for (const intervention of this.interventionAll) {
        if (intervention.client.id == this.clientSelected.id){
          this.interventionAllSelected.push(intervention);
          this.isInterventionSelected = true;
        }
      }


      console.log(this.interventionAllSelected)

    })
  }

  createIntervention(form: NgForm){

    console.log(form.value)

    let date:string = form.value['date'];
    let content:string = form.value['content'];
    let typeID:string = form.value['title'];
    let userID:number = form.value['user'];
    let clientID:string = form.value['client'];

    let bodyNoJsonIntervention: any = {
      "date":date,
      "information":content,
      "title":typeID,
      "user":userID,
      "client":clientID,
      // "state":"1"
    };
    const bodyIntervention = JSON.stringify(bodyNoJsonIntervention);

    console.log(bodyIntervention)

    this.interventionService.postIntervention(bodyIntervention, this.app.setURL(), this.app.createCorsToken()).subscribe(reponseCreateInterv => {

      if(reponseCreateInterv['status'] == true){
        alert("CREER");
        this.router.navigate(['/client/'+this.clientSelected.id]);
      } else if (reponseCreateInterv['status'] == false){
        alert(reponseCreateInterv['message']);
      } else {
        alert("err");
      }

    })
  }

}
