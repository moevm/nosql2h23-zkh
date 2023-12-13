import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  visible: boolean = false;

  schedule_visible: boolean = false;

  switchVisibility(){
    this.visible = !this.visible
  }

}
