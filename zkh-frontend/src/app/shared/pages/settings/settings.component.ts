import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../types/enumerations';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {

  public Role = Role

  constructor(
    public authService: AuthService
  ) {

  }
}
