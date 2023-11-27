import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../app.component";
import {UserInterface} from "../user-interface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title: string = 'Page D\'Accueil';
  description: string = 'je suis la description a la page';

  constructor(private app: AppComponent) { }

  userConnected: UserInterface|any = this.app.userConnected;

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

  }

}
