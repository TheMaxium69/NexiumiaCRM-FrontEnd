import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {InterventionInterface} from "./intervention-interface";

@Injectable({
  providedIn: 'root'
})
export class InterventionService {

  constructor(private http: HttpClient) { }

  //recupere tout les Interventions
  getInterventions(url: string, options : {headers: HttpHeaders} ): Observable<InterventionInterface[]> {
    return this.http.get<InterventionInterface[]>(url + '/api/interventions', options);
  }

  //Recupere une seule Intervention
  getInterventionsOne(InterventionsId: number, url: string, options : {headers: HttpHeaders} ): Observable<InterventionInterface> {
    return this.http.get<InterventionInterface>(url + '/api/intervention/' + InterventionsId, options);
  }

  // Create Intervention
  postIntervention(body: string, url:string, options : {headers: HttpHeaders} ): Observable<any> {
    return this.http.post<any>(url+'/api/createIntervention', body, options);
  }
}
