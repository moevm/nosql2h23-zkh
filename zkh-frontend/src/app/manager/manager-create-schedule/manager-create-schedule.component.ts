import { Component } from '@angular/core';
import { ScheduleService } from '../manager-services/schedule.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manager-create-schedule',
  templateUrl: './manager-create-schedule.component.html',
  styleUrls: ['./manager-create-schedule.component.css']
})
export class ManagerCreateScheduleComponent {
  constructor(
    public scheduleService: ScheduleService
  ) {

  }

  form: FormGroup = new FormGroup({
    title: new FormControl(""),
    address: new FormControl(""),
    date: new FormControl(""),
    description: new FormControl("")
  })

  createSchedule() {
    console.log(
      this.form.value.title,
      this.form.value.address,
      this.form.value.date,
      this.form.value.description
    )
    this.scheduleService.create_schedule = false
  }
}
