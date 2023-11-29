import { Component, NgZone } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { PopUpService } from '../../services/pop-up.service';
import { Role } from '../../types/enumerations';

@Component({
  selector: 'app-popup-menu',
  templateUrl: './popup-menu.component.html',
  styleUrls: ['./popup-menu.component.css']
})
export class PopupMenuComponent {

  public Role = Role

  constructor(
    public authService: AuthService,
    public popUpService: PopUpService,
    private zone: NgZone,
    private router: Router
  ) {

  }

  logout() {
    this.authService.logedIn = false
    this.popUpService.visible = false
    this.zone.run(() => { this.router.navigate(["/authorization"]) })
  }
}
