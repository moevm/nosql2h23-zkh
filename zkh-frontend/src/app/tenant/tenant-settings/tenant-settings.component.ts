import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RequestService } from 'src/app/shared/services/request.service';

@Component({
  selector: 'app-tenant-settings',
  templateUrl: './tenant-settings.component.html',
  styleUrls: ['./tenant-settings.component.css']
})
export class TenantSettingsComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private requestService: RequestService
  ) {

  }

  form: FormGroup = new FormGroup({
    name: new FormControl(""),
    // addres: new FormControl(""),
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