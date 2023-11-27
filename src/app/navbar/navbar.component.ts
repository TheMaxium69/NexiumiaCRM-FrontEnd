import {Component} from '@angular/core';
import {AppComponent} from "../app.component";
import {UserInterface} from "../user-interface";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  constructor(private app: AppComponent) { }

  userConnected: UserInterface|any = this.app.userConnected;

}
