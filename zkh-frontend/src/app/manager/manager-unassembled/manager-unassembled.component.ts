import { Component } from '@angular/core';
import { ManagerUnassembledService } from '../manager-services/manager-unassembled.service';

@Component({
  selector: 'app-manager-unassembled',
  templateUrl: './manager-unassembled.component.html',
  styleUrls: ['./manager-unassembled.component.css']
})
export class ManagerUnassembledComponent {
  constructor(
    public managerUnassembledService: ManagerUnassembledService
  ) {
    
  }

  selectAppeal(id: number) {
      this.managerUnassembledService.selectUnassembledAppeal(id)
  }
}
