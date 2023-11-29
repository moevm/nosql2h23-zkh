import { Component, NgZone } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Role } from '../../types/enumerations';
import { RequestService } from '../../services/request.service';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  constructor(
    private authService: AuthService,
    private zone: NgZone,
    private router: Router,
    private requestService: RequestService
  ) {

  }

  authForm: FormGroup = new FormGroup({
    username: new FormControl(""),
    password: new FormControl("")
  })


  login() {
    this.requestService.login(this.authForm.value.username, this.authForm.value.password)
    .subscribe(
      response => {
        this.authService.logedIn = true
        this.authService.id = response.id
        this.authService.name = response.name
        this.authService.phone = response.phoneNumber
        this.authService.role = response.role
        this.zone.run(() => { this.router.navigate(["/home"]) })
      },
      err => {
        this.authForm.reset()
      }
    )
  }

  submitOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') this.login()
  }

}
