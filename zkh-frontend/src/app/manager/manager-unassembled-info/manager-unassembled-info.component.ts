import { Component } from '@angular/core';
import { ManagerUnassembledService } from '../manager-services/manager-unassembled.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-manager-unassembled-info',
  templateUrl: './manager-unassembled-info.component.html',
  styleUrls: ['./manager-unassembled-info.component.css']
})
export class ManagerUnassembledInfoComponent {
  constructor(
    public managerUnassembledService: ManagerUnassembledService,
    private requestService: RequestService,
    private authService: AuthService
  ) {
    
  }

  map: boolean = false;
  

  ngOnInit(): void {
    // this.managerUnassembledService.selected_unassembled_appeal = 
    //   this.managerUnassembledService.unassembled_appels[0]
    // this.refreshMarkers()
    // this.managerUnassembledService.refreshMarkers()
  }

  refreshMarkers() {
    this.managerUnassembledService.markers = this.managerUnassembledService.getMarkers()
    this.managerUnassembledService.active_marker = this.managerUnassembledService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.managerUnassembledService.selectUnassembledAppeal(id)
  }

  takeAppeal(id: number) {
    this.requestService.bind_appeal(id, this.authService.id).subscribe(
      response => {
        this.managerUnassembledService.unassembled_appels = 
          this.managerUnassembledService.unassembled_appels.filter(appeal => id !== appeal.id)
        this.managerUnassembledService.selected_unassembled_appeal =
          this.managerUnassembledService.unassembled_appels[0]
        if (!this.managerUnassembledService.selected_unassembled_appeal) {
          this.managerUnassembledService.selected_unassembled_appeal = null
        }
      }
    )
  }
}
