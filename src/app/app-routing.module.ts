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

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tache', component: TacheComponent},
  {path: 'client', component:ClientComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin/addTechnicien', component: AddTechnicienComponent},
  {path: 'admin/addAgence', component: AddAgenceComponent},
  {path: 'admin/addAdmin', component: AddAdminComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'profile', component: ProfilComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
