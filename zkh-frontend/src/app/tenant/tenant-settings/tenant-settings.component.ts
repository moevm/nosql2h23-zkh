import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tenant-settings',
  templateUrl: './tenant-settings.component.html',
  styleUrls: ['./tenant-settings.component.css']
})
export class TenantSettingsComponent implements OnInit {

  constructor(
    public authService: AuthService
  ) {

  }

  form: FormGroup = new FormGroup({
    name: new FormControl(""),
    addres: new FormControl(""),
    phone: new FormControl("")
  })

  ngOnInit(): void {
    this.form.controls['name'].setValue(this.authService.name)
    this.form.controls['phone'].setValue(this.authService.phone)
    if (this.authService.address) {
      this.form.controls['address'].setValue(this.authService.address)
    }
  }

  saveSettings() {
    console.log(
      this.form.value.name,
      this.form.value.addres,
      this.form.value.phone
    )
  }
}