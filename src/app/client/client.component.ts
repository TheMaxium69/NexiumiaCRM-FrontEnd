import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {ClientService} from "../client.service";
import {ClientInterface} from "../client-interface";
import {AgencyService} from "../agency.service";
import {AgencyInterface} from "../agency-interface";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit{

  title: string = 'Clients';
  description: string = 'je suis la description a la page';
  clientAll: ClientInterface[]|any;
  agenceAll: AgencyInterface[]|any;

  termeRecherche: string = '';
  clientRechercher: ClientInterface[]|any;
  selectedAgency: AgencyInterface[] = [];
  isSelectedAngency: number = 0;

  constructor(private app: AppComponent,
              private clientService: ClientService,
              private agenceService: AgencyService) { }

  ngOnInit(){

    //VERIF TOKEN
    this.app.verifToken();

    this.clientService.getClients(this.app.setURL(),this.app.createCorsToken()).subscribe(clients => {
      this.clientAll = clients;
      this.clientRechercher = this.clientAll;
    })
    this.agenceService.getAgencys(this.app.setURL(),this.app.createCorsToken()).subscribe(agencys => {
      this.agenceAll = agencys;
    })
  }

// BAR DE RECHERCHE
  searchClient() {

    this.clientRechercher = this.clientAll.filter((client: ClientInterface) =>
      client.lastName.toLowerCase().includes(this.termeRecherche.toLowerCase()) ||
      client.firstName.toLowerCase().includes(this.termeRecherche.toLowerCase()) ||
      client.phone.toLowerCase().includes(this.termeRecherche.toLowerCase()) ||
      client.email.toLowerCase().includes(this.termeRecherche.toLowerCase())
    );

  }


// FILTRE AGENCE

  toggleSelection(OneAgencySelected: AgencyInterface) {
    const index = this.selectedAgency.findIndex(selectedAgency => selectedAgency.id === OneAgencySelected.id);

    if (index !== -1) {
      this.selectedAgency.splice(index, 1);
    } else {
      this.selectedAgency.push(OneAgencySelected);
    }

    this.isSelectedAngency = this.selectedAgency.length;
  }

  isSelected(OneAgencySelected: AgencyInterface): boolean {
    return this.selectedAgency.some(selectedAgency => selectedAgency.id === OneAgencySelected.id);
  }


}
