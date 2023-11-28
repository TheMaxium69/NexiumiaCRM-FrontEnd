import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserInterface} from "./user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  //recupere tout les admins
  getUserAdmin(url: string, options : {headers: HttpHeaders} ): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(url + '/api/admins', options);
  }

  //recupere tout les technis
  getUserATechni(url: string, options : {headers: HttpHeaders} ): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(url + '/api/techniciens', options);
  }

  //Recupere une seule User
  getUsers(url: string, options : {headers: HttpHeaders} ): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(url + '/api/users', options);
  }

  //Recupere une seule User
  getUserOne(UserID: number, url: string, options : {headers: HttpHeaders} ): Observable<UserInterface> {
    return this.http.get<UserInterface>(url + '/api/user/' + UserID, options);
  }

  //Recupere un seule User grace a son Token
  getUserOneToken(url: string, options : {headers: HttpHeaders} ): Observable<UserInterface> {
    return this.http.get<UserInterface>(url + '/api/token', options);
  }


  // Create User Techni
  postUserTechni(body: string, url:string, options : {headers: HttpHeaders} ): Observable<any> {
    return this.http.post<any>(url+'/api/createTechnicien', body, options);
  }

  // Create User Admin
  postUserAdmin(body: string, url:string, options : {headers: HttpHeaders} ): Observable<any> {
    return this.http.post<any>(url+'/api/createAdmin', body, options);
  }



}
