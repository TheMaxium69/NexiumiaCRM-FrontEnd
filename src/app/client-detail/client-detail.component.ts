import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../client.service";
import {AppComponent} from "../app.component";
import {ClientInterface} from "../client-interface";

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
    private clientService: ClientService
  ) { }

  clientSelected: ClientInterface|any;

  ngOnInit() {
    const cliendId: number|any = this.route.snapshot.paramMap.get('id');

    this.clientService.getClientOne(cliendId, this.app.setURL(),this.app.createCorsToken()).subscribe(client => {

      this.clientSelected = client;
      if (!this.clientSelected){
        this.router.navigate(['/404']);
      }
      console.log(this.clientSelected);

    })
  }

}
