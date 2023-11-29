import { Component } from '@angular/core';
import { ManagerAppealService } from '../manager-services/manager-appeal.service';

@Component({
  selector: 'app-manager-appeal-info',
  templateUrl: './manager-appeal-info.component.html',
  styleUrls: ['./manager-appeal-info.component.css']
})
export class ManagerAppealInfoComponent {
  constructor(
    public managerAppealService: ManagerAppealService
  ) {

  }

  map: boolean = false;
  

  ngOnInit(): void {
    // this.managerAppealService.selected_appeal = this.managerAppealService.appeals[0]
    // this.refreshMarkers()
    // this.managerAppealService.refreshMarkers()
  }

  refreshMarkers() {
    this.managerAppealService.markers = this.managerAppealService.getMarkers()
    this.managerAppealService.active_marker = this.managerAppealService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.managerAppealService.selectAppeal(id)
  }
}
