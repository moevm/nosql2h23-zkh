import { Component } from '@angular/core';
import { PopUpService } from './shared/services/pop-up.service';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zkh-frontend';

  constructor(
    public popUpService: PopUpService,
    public authService: AuthService
  ) {

  }
}
