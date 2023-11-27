import {Component, OnInit} from '@angular/core';
import {AgencyInterface} from "../agency-interface";
import {AppComponent} from "../app.component";
import {AgencyService} from "../agency.service";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit{

  title: string = 'Stastistique';
  description: string = 'je suis la description a la page';
  agencyAll: AgencyInterface[]|any;

  constructor(private app: AppComponent,
              private agencyService: AgencyService) { }

  ngOnInit(){

    //VERIF TOKEN
    this.app.verifToken();


    this.agencyService.getAgencys(this.app.setURL(),this.app.createCorsToken()).subscribe(agencys => {
      this.agencyAll = agencys;

      console.log(this.agencyAll)
    })

  }



}
