import {Component, OnInit} from '@angular/core';

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

  ngOnInit() {
    this.onglets = Array.from(document.querySelectorAll(".onglets"));
    this.contenu = Array.from(document.querySelectorAll(".contenu"));

    this.onglets.forEach((onglet, index) => {
      onglet.addEventListener("click", () => this.tabsAnimation(index));
    });
  }

  tabsAnimation(index: number) {
    this.onglets[this.indexOngletActif].classList.remove("active");
    this.contenu[this.indexOngletActif].classList.remove("active-contenu");

    this.indexOngletActif = index;

    this.onglets[this.indexOngletActif].classList.add("active");
    this.contenu[this.indexOngletActif].classList.add("active-contenu");
  }

}
