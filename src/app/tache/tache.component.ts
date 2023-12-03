import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserInterface} from "../user-interface";
import {AppComponent} from "../app.component";
import {UserService} from "../user.service";
import { getWeek } from 'date-fns';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit, AfterViewInit {

  title: string = 'Mes Tâches';
  description: string = 'je suis la description a la page';
  userConnected: UserInterface|any = this.app.userConnected;
  currentDate: Date = new Date();
  SelectedDate: Date = this.currentDate;
  nbWeekOfCurrentDate: number = this.getWeekNumber(this.SelectedDate);
  SelectedDayOfWeek = this.SelectedDate.getDay();


  daysOfWeek: string[] = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
  dateOfCollunDay: string[] = ['9', '3', '4', '5', '6', '7', '8'];
  dateOfCollunHeure: number = this.SelectedDate.getHours() + 1;

  constructor(private app: AppComponent) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

  }

  ngAfterViewInit(){

    this.updateCalendar();

  }

  updateCalendar() {

    let SelectedDayDiv: HTMLElement|any = document.getElementById('day'+ this.SelectedDayOfWeek);

    SelectedDayDiv.innerHTML = this.daysOfWeek[this.SelectedDayOfWeek] + " " + this.SelectedDate.getDate()


  }

  nextWeek() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.updateCalendar();
  }

  prevWeek() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.updateCalendar();
  }


  // Recupere le numéro de semaine
  getWeekNumber(date: Date): number {
    return getWeek(date, { weekStartsOn: 1 });
  }

}
