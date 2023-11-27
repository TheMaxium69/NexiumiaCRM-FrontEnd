import { Component } from '@angular/core';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent {

  title: string = 'Mes Tâches';
  description: string = 'je suis la description a la page';

}
