import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router) {}

  isLoggedIn: boolean = true;

  loggout(){
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  login(){
    this.isLoggedIn = true;
    this.router.navigate(['/home']);
  }


}
