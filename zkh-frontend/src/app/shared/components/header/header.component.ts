import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PopUpService } from '../../services/pop-up.service';
import { Router } from '@angular/router';
import { Role } from '../../types/enumerations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    public popUpService: PopUpService,
    private zone: NgZone,
    private router: Router
  ) {

  }

  public Role = Role

  signOutClickHandler() {
    this.authService.logedIn = false
    this.popUpService.visible = false
    this.zone.run(() => { this.router.navigate(["/authorization"]) })
  }
}
