import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { TacheComponent } from './tache/tache.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ProfilComponent } from './profil/profil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CookieService} from "ngx-cookie-service";
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddClientComponent } from './add-client/add-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConnexionComponent,
    TacheComponent,
    ClientComponent,
    AdminComponent,
    StatsComponent,
    NavbarComponent,
    AddTechnicienComponent,
    AddAgenceComponent,
    AddAdminComponent,
    ProfilComponent,
    PageNotFoundComponent,
    ClientDetailComponent,
    AddUserComponent,
    AddClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
