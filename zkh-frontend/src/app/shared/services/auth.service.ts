import { Injectable } from '@angular/core';
import { Role } from '../types/enumerations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  logedIn: boolean = true;
  id: number = 0;
  role: Role = Role.MANAGER;
  name: string = "";
  phone: string = "";
  address?: string = undefined;
}
