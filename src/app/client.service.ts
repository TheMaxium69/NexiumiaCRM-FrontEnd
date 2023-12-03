import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ClientInterface} from "./client-interface";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  //recupere tout les clients
  getClients(url: string, options : {headers: HttpHeaders} ): Observable<ClientInterface[]> {
    return this.http.get<ClientInterface[]>(url + '/api/clients', options);
  }

  //recupere un seul client
  getClientOne(ClientID: number, url: string, options : {headers: HttpHeaders} ): Observable<ClientInterface> {
    return this.http.get<ClientInterface>(url + '/api/client/' + ClientID, options);
  }

  // Create Client
  postClient(body: string, url:string, options : {headers: HttpHeaders} ): Observable<any> {
    return this.http.post<any>(url+'/api/createClient', body, options);
  }
}
