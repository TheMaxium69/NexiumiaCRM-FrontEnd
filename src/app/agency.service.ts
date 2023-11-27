import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AgencyInterface} from "./agency-interface";
import {AppComponent} from "./app.component";

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  //recupere tout les agence
  getAgencys(url: string, options : {headers: HttpHeaders} ): Observable<AgencyInterface[]> {
    return this.http.get<AgencyInterface[]>(url + '/api/agencies', options);
  }

}
