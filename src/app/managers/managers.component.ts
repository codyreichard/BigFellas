import { Component } from '@angular/core';
import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrl: './managers.component.scss'
})
export class ManagersComponent {
  managers: any;
  constructor(private managerService: ManagerService) {}

  ngOnInit() {
    this.managerService.getManagers().subscribe(response => {
      this.managers = response;
      console.log(this.managers);
    });
  }
}
