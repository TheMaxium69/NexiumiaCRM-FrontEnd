import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {UserInterface} from "../user-interface";
import {ClientInterface} from "../client-interface";
import {ClientService} from "../client.service";
import {AgencyInterface} from "../agency-interface";
import {AgencyService} from "../agency.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Dashboard';
  description: string = 'Voici le dahsboard de NexiumiasCRM';
  clientAll: ClientInterface[]|any;
  agencyAll: AgencyInterface[]|any;

  constructor(
    private app: AppComponent,
    private clientService: ClientService,
    private agencyService: AgencyService,
  ) { }

  userConnected: UserInterface|any = this.app.userConnected;

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    this.clientService.getClients(this.app.setURL(),this.app.createCorsToken()).subscribe(clients => {
      this.clientAll = clients;
    })

    this.agencyService.getAgencys(this.app.setURL(),this.app.createCorsToken()).subscribe(agencys => {
      this.agencyAll = agencys;
    })

  }

}
