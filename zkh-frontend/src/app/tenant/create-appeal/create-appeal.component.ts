import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { TenantAppealHistoryService } from '../tenant-services/tenant-appeal-history.service';

@Component({
  selector: 'app-create-appeal',
  templateUrl: './create-appeal.component.html',
  styleUrls: ['./create-appeal.component.css']
})
export class CreateAppealComponent {
  constructor(
    public tenantAppealHistoryService: TenantAppealHistoryService,
    private authService: AuthService,
    private requestService: RequestService
  ) {

  }

  form: FormGroup = new FormGroup({
    title: new FormControl(""),
    address: new FormControl(""),
    type: new FormControl(""),
    description: new FormControl("")
  })

  createAppeal() {
    // this.requestService.create_schedule_work(this.authService.id, {
    //   title: this.form.value.title as string,
    //   description: this.form.value.description as string,
    //   geotag: {
    //     longitude: 39,
    //     latitude: 56
    //   },
    //   manager: {
    //     id: this.authService.id,
    //     name: this.authService.name
    //   },
    //   address: this.form.value.address,
    //   dateStart: new Date(),
    //   dateEnd: new Date()
    // }).subscribe(
    //   response => {
    //     this.scheduleService.works.push(response)
    //     this.scheduleService.create_schedule = false
    //   }
    // )
    console.log(
      this.form.value
    )
  }
}