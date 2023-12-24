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

  import(el: HTMLInputElement) {
    if (!el) return
    if (!el.files) return
    let file: File = el.files[0]
    if (file === undefined) return
    file.text().then(content => {
      this.requestService.import(content).subscribe(
        () => {},
        err => {console.log(err)}
      )
    }).catch(err => console.log(err))
  }

  export() {
    this.requestService.export().subscribe(
      response => {
        let file = new Blob([response]);
        saveAs(file, 'db_dump.xml')
      }
    )
  }
}
