import { Component } from '@angular/core';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {

  constructor(private app: AppComponent) {
  }


  title: string = 'Ton Profile';
  description: string = 'je suis la description a la page';

  loggout(){
    this.app.loggout();
  }

}
