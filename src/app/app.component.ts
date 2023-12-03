import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./auth.service";
import {HttpHeaders} from "@angular/common/http";
import { CookieService } from 'ngx-cookie-service';
import {UserInterface} from "./user-interface";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService,
    private cookieService: CookieService
  ) {
    const cookieToken:string = this.cookieService.get('tokenNexiumias');
    // console.log(cookieToken);

    if (cookieToken){
      this.loginWithCookie(cookieToken);
    }
  }


  /******************************************************************************************************************
  *
  * VARIABLE GLOBAL
  *
  * ******************************************************************************************************************/


  AppEnv: string = "DEV"; // DEV or PROD
  urlApiDev: string = "https://127.0.0.1:8000";
  urlApiProd: string = "https://nexiumia.fr:8000";
  isLoggedIn: boolean = false;
  token: string|any;
  userConnected: UserInterface|any;
  curentDate: Date = new Date();


  /******************************************************************************************************************
  *
  * CONNEXION
  *
  * ******************************************************************************************************************/

  // DECONNEXION
  loggout(){
    this.cookieService.delete('tokenNexiumias');
    this.isLoggedIn = false;
    this.token = undefined;
    this.userConnected = undefined;
    this.router.navigate(['/']);
  }

  //LOGIN
  login(email: string, password: string, saveme: boolean){

    let passwordhased: string|any;

    this.authService.postHash(password, this.setURL()).subscribe(reponseHash => {

      passwordhased = reponseHash;

      this.authService.postLogin(email, passwordhased, this.setURL()).subscribe(reponseToken => {

        // console.log(reponseToken.token)
        this.token = reponseToken.token;

        if (this.token){

          if (saveme){
            this.cookieService.set('tokenNexiumias', this.token);
          }

          this.userService.getUserOneToken(this.setURL(), this.createCorsToken()).subscribe(reponseUser => {

            this.isLoggedIn = true;
            this.userConnected = reponseUser;
            this.router.navigate(['/home']);


          })

        }

      })

    })

  }

  //Login Avec le Cookie
  loginWithCookie(cookieToken: string){
    this.token = cookieToken;
    this.userService.getUserOneToken(this.setURL(), this.createCorsToken()).subscribe(reponseUser => {

      this.isLoggedIn = true;
      this.userConnected = reponseUser;

    })
  }


  // Verif la connexion
  verifToken() {

    if (!this.token){
      this.isLoggedIn = false;
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
