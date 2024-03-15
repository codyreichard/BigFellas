import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchupsComponent } from './matchups/matchups.component';
import { HomeComponent } from './home/home.component';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { ManagersComponent } from './managers/managers.component';
import { ManagerComponent } from './manager/manager.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'matchups', component: MatchupsComponent},
  {path: 'leagueInfo', component: LeagueInfoComponent},
  {path: 'managers', component: ManagersComponent},
  {path: 'manager/:user_id', component: ManagerComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
