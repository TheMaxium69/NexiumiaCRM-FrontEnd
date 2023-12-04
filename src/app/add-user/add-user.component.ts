import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AppComponent} from "../app.component";
import {ClientService} from "../client.service";
import {UserService} from "../user.service";
import {InterventionService} from "../intervention.service";
import {LicenceService} from "../licence.service";
import {LicenceInterface} from "../licence-interface";
import {UserInterface} from "../user-interface";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit{

  title: string = 'Ajout d\'utilisateur';
  description: string = 'je suis la description a la page';
  onglets: HTMLElement[] = [];
  contenu: HTMLElement[] = [];
  indexOngletActif: number = 0;
  licenceAll:LicenceInterface[]|any;
  userAll:UserInterface[]|any;

  constructor(
    private app: AppComponent,
    private licenceService: LicenceService,
    private userService: UserService
  ) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    this.onglets = Array.from(document.querySelectorAll(".onglets"));
    this.contenu = Array.from(document.querySelectorAll(".contenu"));

    this.onglets.forEach((onglet, index) => {
      onglet.addEventListener("click", () => this.tabsAnimation(index));
    });

    this.licenceService.getLicences(this.app.setURL(),this.app.createCorsToken()).subscribe(licences => {
      this.licenceAll = licences;
    })
    this.userService.getUsers(this.app.setURL(),this.app.createCorsToken()).subscribe(users => {
      this.userAll = users;
    })
  }

  tabsAnimation(index: number) {
    this.onglets[this.indexOngletActif].classList.remove("active");
    this.contenu[this.indexOngletActif].classList.remove("active-contenu");

    this.indexOngletActif = index;

    this.onglets[this.indexOngletActif].classList.add("active");
    this.contenu[this.indexOngletActif].classList.add("active-contenu");
  }

}
