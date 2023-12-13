import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-manager-settings',
  templateUrl: './manager-settings.component.html',
  styleUrls: ['./manager-settings.component.css']
})
export class ManagerSettingsComponent {
  constructor(
    public authService: AuthService,
    public requestService: RequestService
  ) {

  }

  form: FormGroup = new FormGroup({
    first_name: new FormControl(""),
    last_name: new FormControl(""),
    patronymic_name: new FormControl(""),
    phone: new FormControl("")
  })

  ngOnInit(): void {
    // this.form.controls['first_name'].setValue(this.authService.first_name)
    // this.form.controls['last_name'].setValue(this.authService.last_name)
    // this.form.controls['patronymic_name'].setValue(this.authService.patronymic_name)
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

  import() {

  }

  export() {
    this.requestService.export().subscribe(
      response => {
        console.log(response, typeof(response))

        let file = new Blob([response]);
        console.log(file)
        saveAs(file, 'db_dump.xml')
      }
    )
  }
}
