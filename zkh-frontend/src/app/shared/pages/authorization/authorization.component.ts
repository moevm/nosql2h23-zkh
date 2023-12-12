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
    // this.requestService.login(this.authForm.value.username, this.authForm.value.password)
    // .subscribe(
    //   response => {
    //     this.authService.logedIn = true
    //     this.authService.id = response.id
    //     this.authService.name = response.name
    //     this.authService.phone = response.phoneNumber
    //     this.authService.role = response.role
    //     this.zone.run(() => { this.router.navigate(["/home"]) })
    //   },
    //   err => {
    //     this.authForm.reset()
    //   }
    // )
    this.authService.logedIn = true
    this.authService.id = 1
    this.authService.name = "Иванов Иван Иванович"
    this.authService.phone = "8-962-169-35-12"
    this.authService.address = undefined
    this.authService.role = Role.TENANT
    this.zone.run(() => { 
      switch (this.authService.role) {
        case Role.WORKER:
          this.router.navigate(["/worker-tasks"])
          break;
        case Role.TENANT:
          this.router.navigate(["/tenant-appeal-history"])
          break;
        case Role.MANAGER:
          this.router.navigate(["/manager-all-appeals"])
          break;
      }
    })
  }

  submitOnEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') this.login()
  }

}
