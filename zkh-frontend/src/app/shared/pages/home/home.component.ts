import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../types/enumerations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public Role = Role

  constructor(
    public authService: AuthService
  ) {

  }
}
