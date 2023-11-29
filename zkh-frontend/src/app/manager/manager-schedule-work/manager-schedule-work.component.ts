import { Component, OnInit } from '@angular/core';
import { ScheduleService } from '../manager-services/schedule.service';

@Component({
  selector: 'app-manager-schedule-work',
  templateUrl: './manager-schedule-work.component.html',
  styleUrls: ['./manager-schedule-work.component.css']
})
export class ManagerScheduleWorkComponent implements OnInit {
  constructor(
    public scheduleService: ScheduleService
  ) {

  }

  selectScheduleWork(id: number) {
    this.scheduleService.selectScheduleWork(id)
  }
  
  ngOnInit(): void {
    
  }
}
