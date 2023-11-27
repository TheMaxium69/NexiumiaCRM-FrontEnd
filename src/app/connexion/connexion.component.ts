import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(private app: AppComponent) {
  }

  login(){
    this.app.login();
  }
}
