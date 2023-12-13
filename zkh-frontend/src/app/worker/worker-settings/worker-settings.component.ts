import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-worker-settings',
  templateUrl: './worker-settings.component.html',
  styleUrls: ['./worker-settings.component.css']
})
export class WorkerSettingsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    public requestService: RequestService
  ) {

  }

  form: FormGroup = new FormGroup({
    name: new FormControl(""),
    phone: new FormControl("")
  })

  ngOnInit(): void {
    this.form.controls['name'].setValue(this.authService.name)
    this.form.controls['phone'].setValue(this.authService.phone)
  }

  saveSettings() {
    this.requestService.save_settings(
      this.authService.role,
      this.authService.id,
      this.form.value.name,
      this.form.value.phone
    ).subscribe(
      response => {
        this.form.controls['name'].setValue(response.name)
        this.form.controls['phone'].setValue(response.phoneNumber)
      }
    )
  }
}
