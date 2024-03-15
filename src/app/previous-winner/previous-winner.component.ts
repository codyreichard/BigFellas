import { Component } from '@angular/core';

@Component({
  selector: 'app-previous-winner',
  templateUrl: './previous-winner.component.html',
  styleUrl: './previous-winner.component.scss'
})
export class PreviousWinnerComponent {
  season_year = "";
  season_type = ""

  constructor() {
    let currDate = new Date();
    let currMonth = currDate.getMonth() + 1; // TS months are zero based
    this.season_year = currDate.getFullYear().toString();

    console.log("Current month is: " + currDate.getMonth());
    if(currMonth > 2 && currMonth < 9)
      this.season_type = "Preseason"
    else
      this.season_type = "Season";
  }
}
