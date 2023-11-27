import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {AgencyService} from "../agency.service";
import {ClientService} from "../client.service";
import {ClientInterface} from "../client-interface";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  title: string = 'Clients';
  description: string = 'je suis la description a la page';
  clientAll: ClientInterface[]|any;

  constructor(private app: AppComponent,
              private clientService: ClientService,
              private agencyService: AgencyService) { }

  ngOnInit(){

    //VERIF TOKEN
    this.app.verifToken();

    this.clientService.getClients(this.app.setURL(),this.app.createCorsToken()).subscribe(clients => {

      this.clientAll = clients;
      console.log(this.clientAll);

    })
  }

}
