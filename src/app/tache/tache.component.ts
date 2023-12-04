import {AfterViewInit, Component, OnInit} from '@angular/core';
import {UserInterface} from "../user-interface";
import {AppComponent} from "../app.component";
import {UserService} from "../user.service";
import { getWeek } from 'date-fns';
import {InterventionInterface} from "../intervention-interface";

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit, AfterViewInit {

  title: string = 'Mes Tâches';
  description: string = 'je suis la description a la page';
  userConnected: UserInterface|any = this.app.userConnected;
  currentDate: Date = this.app.curentDate;
  SelectedDate: Date = this.currentDate;
  interventionAll: InterventionInterface[]|any = this.userConnected.interventions;


  daysOfWeek: string[] = [' ', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
  daysOfWeekId: number[] = [1, 2, 3, 4, 5, 6, 0];
  monthOfYears: string[] = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  dateOfCollunDay: string[] = ['9', '3', '4', '5', '6', '7', '8'];
  dateOfCollunHeure: number = this.SelectedDate.getHours() + 1;
  viewnDate: number[] = [];

  constructor(private app: AppComponent) { }

  ngOnInit() {

    //VERIF TOKEN
    this.app.verifToken();

    this.currentDate = new Date();

  }

  ngAfterViewInit(){

    this.currentDate = new Date();
    this.updateCalendar();

  }

  updateCalendar() {

    // console.log(this.SelectedDate)
    // console.log(this.currentDate)

    // GENERATION DU CALENDAR
    let nbWeekOfCurrentDate: number = this.getWeekNumber(this.SelectedDate);
    let SelectedDayOfWeek = this.SelectedDate.getDay();
    let SelectedDayBefore: Date[] = this.getWeekBefore(this.SelectedDate);
    let SelectedDayAfter: Date[] = this.getWeekAfter(this.SelectedDate);

    let CurrentTitleDiv: HTMLElement|any = document.getElementById('CurrentTitle');
    CurrentTitleDiv.innerHTML = this.monthOfYears[this.SelectedDate.getMonth()] + " " + this.SelectedDate.getFullYear() + " - Semaine " + nbWeekOfCurrentDate

    let SelectedDayOfWeekNewForma:number = SelectedDayOfWeek;
    if (SelectedDayOfWeek == 0){
      let SelectedDayOfWeekNewForma:number = 7;
      let SelectedDayDiv: HTMLElement | any = document.getElementById('day7');
      if (this.SelectedDate.getDate() !== this.currentDate.getDate()){
        SelectedDayDiv.innerHTML = this.daysOfWeek[7] + " " + this.SelectedDate.getDate();
      } else {
        SelectedDayDiv.innerHTML = "<span style='background: #ea4335;border-radius: 100px;padding: 9px;color: white;'>" + this.daysOfWeek[7] + " " + this.SelectedDate.getDate() + "</span>";
      }

    } else {
      let SelectedDayDiv: HTMLElement | any = document.getElementById('day' + SelectedDayOfWeek);
      if (this.SelectedDate.getDate() !== this.currentDate.getDate()){
        SelectedDayDiv.innerHTML = this.daysOfWeek[SelectedDayOfWeek] + " " + this.SelectedDate.getDate();
      } else {
        SelectedDayDiv.innerHTML = "<span style='background: #ea4335;border-radius: 100px;padding: 9px;color: white;'>" + this.daysOfWeek[SelectedDayOfWeek] + " " + this.SelectedDate.getDate() + "</span>";
      }
    }
    //background: #ea4335;border-radius: 100px;padding: 9px;color: white;

    this.viewnDate = [];
    for (let i = 1; i <= 7; i++) {

      let Temp = i - SelectedDayOfWeekNewForma;
      /*console.log("i = " + i);
      console.log("Temp = " + Temp);*/

      if (Temp < 0) {
        let DivI: HTMLElement | any = document.getElementById('day' + i);
        DivI.innerHTML = this.daysOfWeek[i] + " " + SelectedDayBefore[i].getDate()
        this.viewnDate.push(SelectedDayBefore[i].getDate())

      } else if (Temp > 0) {
        let DivI: HTMLElement | any = document.getElementById('day' + i);
        DivI.innerHTML = this.daysOfWeek[i] + " " + SelectedDayAfter[Temp-1].getDate()
        this.viewnDate.push(SelectedDayAfter[Temp-1].getDate())
      } else if (Temp == 0){
        this.viewnDate.push(this.SelectedDate.getDate())
      }

    }

    // console.log(this.viewnDate)

    // GENERATION DES INTERVENTION

    for (let j = 1; j <= this.interventionAll.length; j++){
      let DivContent: HTMLElement | any = document.getElementById('content');
      let intervention:InterventionInterface = this.interventionAll[j-1];
      let interventionDate: Date = new Date(intervention.date)
      interventionDate.setHours(interventionDate.getHours() -1);

      // console.log(intervention.date);
      // console.log(interventionDate);

      let gridColumn:string = "grid-column: " + this.dateOfCollunDay[interventionDate.getDay()] + ";";
      // console.log(gridColumn)

      let gridRow_start:number = interventionDate.getHours() + 1;
      let gridRow_time:number = 1;
      let gridRow:string = "grid-row: " + gridRow_start.toString() + "/span " +  gridRow_time.toString() + ";";
      // console.log(gridRow)

      /*
        grid-column: 3;
        grid-row: 9/span 4;
      */

      let TempVerif:number = interventionDate.getDay();
      // console.log(interventionDate.getDay());
      if (TempVerif == 0){
        TempVerif = 7;
      }
      // console.log(this.viewnDate[TempVerif]);

      if (this.viewnDate[TempVerif-1] == interventionDate.getDate()){

        let icone:string = "";
        if (intervention.title == "1") {
          icone = '<i class="fa-solid fa-phone"></i>';
        } else if(intervention.title == "2") {
          icone = '<i class="fa-solid fa-screwdriver-wrench"></i>';
        }

        DivContent.innerHTML = DivContent.innerHTML + `
            <div onclick="window.location.href = '/client/`+ intervention.client.id +`';" id="InterventionID-`+ intervention.id +`" class="event" style="background: `+ intervention.client.agency.color  + ";" +  gridColumn + gridRow +`"><div class="event-back">`+ icone + " " + intervention.client.firstName + " " +intervention.client.lastName +`</div></div>
            ` + this.getStyleEvent();
      } else {
          /*console.log("A SUPPRIMER")*/
          let DivInterventionJ: HTMLElement | any = document.getElementById('InterventionID-' + intervention.id);
          if (DivInterventionJ){
            DivInterventionJ.remove();
          }
      }
    }

    // GENERATION DE LA CURRENT BAR
    let DivCurrentBar: HTMLElement | any = document.getElementById('CurrentBar');
    let TempVerifCurrentBar:number = this.currentDate.getDay();
    // console.log(TempVerifCurrentBar)

    if (TempVerifCurrentBar == 0){
      TempVerifCurrentBar = 6;
    }

    // console.log(this.viewnDate[TempVerifCurrentBar-1])
    // console.log(this.currentDate.getDate())
    //
    // console.log(this.currentDate.getDate() == this.viewnDate[TempVerifCurrentBar-1])

    if (this.currentDate.getDate() == this.viewnDate[TempVerifCurrentBar-1]){

      let DivContent: HTMLElement | any = document.getElementById('content');



      DivContent.innerHTML = DivContent.innerHTML +
      `
      <div id="CurrentBar" class="current-time" style="grid-column: `+ this.dateOfCollunDay[this.SelectedDate.getDay()] +`; grid-row: `+ this.dateOfCollunHeure +`">
        <div class="circle"></div>
      </div>
      <style>
      .current-time {
        border-top: 2px solid #ea4335;
        position: relative;
        top: calc(50% - 1px);
      }
      .circle {
        width: 12px;
        height: 12px;
        border: 1px solid #ea4335;
        border-radius: 50%;
        background: #ea4335;
        position: relative;
        top: -6px;
        left: -6px;
      }
      </style>
      `;

    } else {
      if (DivCurrentBar){
        // console.log("A SUPPRIMER")
        DivCurrentBar.remove();
      }
    }



  }

  nextWeek() {
    this.SelectedDate.setDate(this.SelectedDate.getDate() + 7);
    this.updateCalendar();
  }

  prevWeek() {
    this.SelectedDate.setDate(this.SelectedDate.getDate() - 7);
    this.updateCalendar();
  }

  // Recupere les 7 avant ma date
  getWeekBefore(date: Date): Date[] {
    const dayBefore: Date[] = [];

    // Ajouter les 7 jours avant la date
    for (let i = 6; i >= 0; i--) {
      let dayBeforeI = new Date(date);
      dayBeforeI.setDate(date.getDate() - i);
      dayBefore.push(dayBeforeI);
    }

    return dayBefore;

  }

  // Recupere les 7 après ma date
  getWeekAfter(date: Date): Date[] {
    const dayAfter: Date[] = [];

    // Ajouter les 7 jours après la date
    for (let i = 1; i <= 7; i++) {
      let dayAfterI = new Date(date);
      dayAfterI.setDate(date.getDate() + i);
      dayAfter.push(dayAfterI);
    }

    return dayAfter;
  }


  // Recupere le numéro de semaine
  getWeekNumber(date: Date): number {
    return getWeek(date, { weekStartsOn: 1 });
  }

  //Generation du style
  getStyleEvent(){
    let styleEvent:string = `
    <style>
        .event {
            border-radius: 5px;
            margin-right: 10px;
            transition: all 0.2s ease 0s;
          }

        .event-back{
            border-radius: 4px;
            padding: 5px;
            font-weight: bold;
            font-size: 80%;
            height: 100%;
            background: #ffffff9e;
        }

        .event:hover{
            z-index: 1000;
            -webkit-transform: scale(1.10);
            -moz-transform: scale(1.10);
            -ms-transform: scale(1.10);
            -o-transform: scale(1.10);
            transform: scale(1.10);
        }
      `
    return styleEvent
  }

}
