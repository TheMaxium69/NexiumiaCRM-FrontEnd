import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private http: HttpClient) { }

  //recupere tout les clients
  getLicences(url: string, options : {headers: HttpHeaders} ): Observable<LicenceService[]> {
    return this.http.get<LicenceService[]>(url + '/api/licences', options);
  }
}
