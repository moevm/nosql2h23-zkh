import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-worker-settings',
  templateUrl: './worker-settings.component.html',
  styleUrls: ['./worker-settings.component.css']
})
export class WorkerSettingsComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {

  }

  form: FormGroup = new FormGroup({
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    patronymic_name: new FormControl(""),
    phone: new FormControl("")
  })

  ngOnInit(): void {
    this.form.controls['name'].setValue(this.authService.name)
    this.form.controls['phone'].setValue(this.authService.phone)
  }

  saveSettings() {
    console.log(
      this.form.value.name,
      this.form.value.phone
    )
  }
}
