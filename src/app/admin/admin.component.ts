import {Component, OnInit} from '@angular/core';
import {AgencyService} from "../agency.service";
import {AgencyInterface} from "../agency-interface";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  title: string = 'Administration';
  description: string = 'je suis la description a la page';
  agencyAll: AgencyInterface[]|any;

  constructor(private app: AppComponent,
              private agencyService: AgencyService) { }

  ngOnInit(){

    //VERIF TOKEN
    this.app.verifToken();


    this.agencyService.getAgencys(this.app.setURL(),this.app.createCorsToken()).subscribe(agencys => {
      this.agencyAll = agencys;
    })
  }

}
