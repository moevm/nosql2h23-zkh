import { Component } from '@angular/core';
import { ScheduleService } from '../manager-services/schedule.service';

@Component({
  selector: 'app-manager-schedule-info',
  templateUrl: './manager-schedule-info.component.html',
  styleUrls: ['./manager-schedule-info.component.css']
})
export class ManagerScheduleInfoComponent {
  constructor(
    public scheduleService: ScheduleService
  ) {

  }
}
