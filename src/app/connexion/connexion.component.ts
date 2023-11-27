import { Component } from '@angular/core';
import {AppComponent} from "../app.component";
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {

  constructor(
    private app: AppComponent,
    private authService: AuthService
  ) { }

  login(form: NgForm){

    let email = form.value.email
    let password = form.value.password
    let saveme = form.value.saveme

    // console.log(form.value);

    this.app.login(email, password, saveme);
  }

}
