import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

//This will move to its own module file specifically for material imports
import {MatCardModule} from '@angular/material/card';
import { PreviousWinnerComponent } from './previous-winner/previous-winner.component';
import { MatchupsComponent } from './matchups/matchups.component';
import { HomeComponent } from './home/home.component';
import { LeagueInfoComponent } from './league-info/league-info.component';
import { ManagersComponent } from './managers/managers.component';
import { HeaderComponent } from './header/header.component'
import { ManagerService } from '../services/manager.service';
import { ManagerComponent } from './manager/manager.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PreviousWinnerComponent,
    MatchupsComponent,
    HomeComponent,
    LeagueInfoComponent,
    ManagersComponent,
    HeaderComponent,
    ManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
