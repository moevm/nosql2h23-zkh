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
    this.requestService.create_appeal(this.authService.id, {
      title: this.form.value.title as string,
      description: this.form.value.description as string,
      address: this.form.value.address as string,
      geotag: {
        longitude: 39,
        latitude: 56
      },
      type: this.form.value.type as string,
      date: new Date()
    }).subscribe(
      response => {
        this.tenantAppealHistoryService.appeals.push(response)
        this.tenantAppealHistoryService.create_appeal = false
      }
    )
  }
}