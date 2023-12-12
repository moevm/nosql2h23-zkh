import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/manager/manager-services/schedule.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-manager-schedule-work-page',
  templateUrl: './manager-schedule-work-page.component.html',
  styleUrls: ['./manager-schedule-work-page.component.css']
})
export class ManagerScheduleWorkPageComponent implements OnInit {
  constructor(
    public scheduleService: ScheduleService,
    private requestService: RequestService
  ) {
    
  }

  ngOnInit(): void {
    this.requestService.get_schedule_work().subscribe(
      response => {
        this.scheduleService.works = [...response]
      }
    )
    this.scheduleService.selected_work = this.scheduleService.works[0]
    if (!this.scheduleService.selected_work) {
      this.scheduleService.selected_work = null
    }
    this.scheduleService.create_schedule = false
  }
}

