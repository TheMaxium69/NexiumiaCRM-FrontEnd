import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TacheComponent } from './tache/tache.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'tache', component: TacheComponent},
  {path: 'client', component:ClientComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'stats', component: StatsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
