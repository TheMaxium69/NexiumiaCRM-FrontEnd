import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}


  /******************************************************************************************************************
  *
  * VARIABLE GLOBAL
  *
  * ******************************************************************************************************************/


  AppEnv: string = "DEV"; // DEV or PROD
  isLoggedIn: boolean = false;
  token: string|any;
  urlApiDev: string = "https://127.0.0.1:8000";
  urlApiProd: string = "https://nexiumia.fr:8000";


  /******************************************************************************************************************
  *
  * CONNEXIONNN
  *
  * ******************************************************************************************************************/

  // DECONNEXION
  loggout(){
    this.isLoggedIn = false;
    this.token = undefined;
    this.router.navigate(['/']);
  }

  //LOGIN
  login(email: string, password: string){

    let passwordhased: string|any;

    this.authService.postHash(password, this.setURL()).subscribe(reponseHash => {

      passwordhased = reponseHash;

      this.authService.postLogin(email, passwordhased, this.setURL()).subscribe(reponseToken => {

        console.log(reponseToken.token)
        this.token = reponseToken.token;

        if (this.token){

          this.isLoggedIn = true;
          this.router.navigate(['/home']);

        }

      })

    })

  }

  // LOGIN SANS SYMFONY
  loginCheat(){

    this.isLoggedIn = true;
    this.router.navigate(['/home']);

  }

  // Verif la connexion
  verifToken() {

    if (!this.token){
      this.isLoggedIn = false;
      this.router.navigate(['/']);
    }

  }

  /*****************************************************************************************************************
  *
  * FUNCTION GLOBAL
  *
  * ******************************************************************************************************************/

  //CORS With TOKEN
  createCorsToken(): {headers: HttpHeaders} {
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+this.token,
    });
    const options: {headers: HttpHeaders}  = { headers: headers };

    return options;
  }

  //SET URL API
  setURL():string {

    if (this.AppEnv == "DEV"){
      return this.urlApiDev;
    } else {
      return this.urlApiProd;
    }

  }

}
