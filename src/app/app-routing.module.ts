import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TacheComponent } from './tache/tache.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';
import { AddTechnicienComponent } from './add-technicien/add-technicien.component';
import { AddAgenceComponent } from './add-agence/add-agence.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import {ProfilComponent} from "./profil/profil.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ClientDetailComponent} from "./client-detail/client-detail.component";
import {AddUserComponent} from "./add-user/add-user.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'tache', component: TacheComponent},
  {path: 'client', component: ClientComponent},
  {path: 'client/:id', component: ClientDetailComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/addUser', component: AddUserComponent},
  {path: 'admin/addAdmin', component: AddAdminComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'profile', component: ProfilComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'},
  {path: '404', component: PageNotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
