import { Injectable } from '@angular/core';
import { AppConstants } from '../app/app.constants';
import { HttpClient } from '@angular/common/http';
import {Observable, forkJoin } from 'rxjs';
import { CacheService } from './cache.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  constructor(private constants: AppConstants,
    private httpClient: HttpClient,
    private cacheService: CacheService)
  { }

  ngOnInit(){
  }

  getFullManagers() {
    console.log("getting full managers")
    forkJoin([
      this.getManagers(),
      this.getRosters()
    ]).subscribe( ([managers, rosters]) => {
      this.processManagers(managers, rosters);
      console.log("rosters " + rosters)
    })
  }

  getManagers(): Observable<any> {
    var url = this.constants.BASE_URL + '/league/' + this.constants.LEAGUE_ID + '/users';
    // var cachedData = this.cacheService.get(url)
    // need to implement caching.
    return this.httpClient.get(url);
  }

  getRosters() : Observable<any>{
    var roster_url = this.constants.BASE_URL + "league/"+ this.constants.LEAGUE_ID + "/rosters";
    return this.httpClient.get(roster_url);
  }

  private processManagers(managers: any, rosters: any){
    for(var manager of managers){
      var roster = this.findRoster(manager.user_id, rosters);
    }
  }

  private findRoster(id: number, rosters: any): any {
    for(var roster in rosters){
      console.log(roster)
    }

    return null;
  }
}
