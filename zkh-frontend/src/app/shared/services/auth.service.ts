import { Injectable } from '@angular/core';
import { Role } from '../types/enumerations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logedIn: boolean = true
  id: number = 0;
  role: Role = Role.MANAGER

  // last_name: string = "Manager"
  // first_name: string = "Manager"
  // patronymic_name: string = "Manager"
  name: string = "";
  phone: string = ""
}
