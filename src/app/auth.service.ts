import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TokenInterface} from "./token-interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  options = { headers: this.headers };


  // Chiffrer le mots de passe
  postHash(Password: string, url:string): Observable<String> {
    let bodyNoJson: any={"password":Password};
    const body = JSON.stringify(bodyNoJson);
    console.log(body);
    return this.http.post<String>(url+'/api/hashMdp', body, this.options);
  }

  // Login (Recup le Token)
  postLogin(Email: string, PasswordHashed: string, url:string): Observable<TokenInterface> {
    let bodyNoJson: any = {
      "email":Email,
      "password":PasswordHashed
    };
    const body = JSON.stringify(bodyNoJson);
    console.log(body);

    return this.http.post<TokenInterface>(url+'/api/login_check', body, this.options);
  }


}
