import { Component } from '@angular/core';
import { ScheduleService } from '../manager-services/schedule.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-manager-create-schedule',
  templateUrl: './manager-create-schedule.component.html',
  styleUrls: ['./manager-create-schedule.component.css']
})
export class ManagerCreateScheduleComponent {
  constructor(
    public scheduleService: ScheduleService,
    private authService: AuthService,
    private requestService: RequestService
  ) {

  }

  form: FormGroup = new FormGroup({
    title: new FormControl(""),
    address: new FormControl(""),
    date: new FormControl(""),
    description: new FormControl("")
  })

  createSchedule() {
    this.requestService.create_schedule_work(this.authService.id, {
      title: this.form.value.title as string,
      description: this.form.value.description as string,
      geotag: {
        longitude: 39,
        latitude: 56
      },
      manager: {
        id: this.authService.id,
        name: this.authService.name
      },
      address: this.form.value.address,
      dateStart: new Date(),
      dateEnd: new Date()
    }).subscribe(
      response => {
        this.scheduleService.works.push(response)
        this.scheduleService.create_schedule = false
      }
    )
  }
}
