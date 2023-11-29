import { Component, OnInit } from '@angular/core';
import { ScheduleService } from 'src/app/manager/manager-services/schedule.service';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-schedule-work',
  templateUrl: './schedule-work.component.html',
  styleUrls: ['./schedule-work.component.css']
})
export class ScheduleWorkComponent implements OnInit {
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
