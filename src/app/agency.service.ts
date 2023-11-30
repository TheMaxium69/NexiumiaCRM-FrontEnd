import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AgencyInterface} from "./agency-interface";
import {AppComponent} from "./app.component";
import {ClientInterface} from "./client-interface";

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

  constructor(private http: HttpClient) { }

  //recupere tout les agences
  getAgencys(url: string, options : {headers: HttpHeaders} ): Observable<AgencyInterface[]> {
    return this.http.get<AgencyInterface[]>(url + '/api/agencies', options);
  }

  //Recupere une seule agence
  getAgencyOne(AgencyId: number, url: string, options : {headers: HttpHeaders} ): Observable<AgencyInterface> {
    return this.http.get<AgencyInterface>(url + '/api/agency/' + AgencyId, options);
  }

  // Create Agence
  postAgency(body: string, url:string, options : {headers: HttpHeaders} ): Observable<any> {
    return this.http.post<any>(url+'/api/createAgency', body, options);
  }

}
