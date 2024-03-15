import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.scss'
})
export class ManagerComponent {
  userId: Number = -1;
  constructor(private activatedRoute: ActivatedRoute,
    private managerService: ManagerService){
  }

  ngOnInit(){
    this.activatedRoute.params.subscribe( params =>{
      this.userId = params['user_id'];
    });

    this.managerService.getFullManagers();


    // this.managerService.getRosters().subscribe( response => {
    //   console.log(response);
    // })

  }
}
