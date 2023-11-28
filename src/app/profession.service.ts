import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProfessionInferface} from "./profession-inferface";

@Injectable({
  providedIn: 'root'
})
export class ProfessionService {

  constructor(private http: HttpClient) { }

  //recupere toute les Profession
  getProfessions(url: string, options : {headers: HttpHeaders} ): Observable<ProfessionInferface[]> {
    return this.http.get<ProfessionInferface[]>(url + '/api/professions', options);
  }

  //recupere une seul Profession
  getProfessionOne(ProfessionID: number, url: string, options : {headers: HttpHeaders} ): Observable<ProfessionInferface> {
    return this.http.get<ProfessionInferface>(url + '/api/profession/' + ProfessionID, options);
  }
}
