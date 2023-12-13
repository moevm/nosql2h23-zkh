import { Component, OnInit } from '@angular/core';
import { TenantAppealHistoryService } from '../tenant-services/tenant-appeal-history.service';

@Component({
  selector: 'app-tenant-appeal-info',
  templateUrl: './tenant-appeal-info.component.html',
  styleUrls: ['./tenant-appeal-info.component.css']
})
export class TenantAppealInfoComponent implements OnInit {
  constructor(
    public tenantAppealHistoryService: TenantAppealHistoryService
  ) {

  }

  map: boolean = false;
  

  ngOnInit(): void {
    this.tenantAppealHistoryService.selected_appeal = this.tenantAppealHistoryService.appeals[0]
    this.refreshMarkers()
    this.tenantAppealHistoryService.refreshMarkers()
  }

  refreshMarkers() {
    this.tenantAppealHistoryService.markers = this.tenantAppealHistoryService.getMarkers()
    this.tenantAppealHistoryService.active_marker = this.tenantAppealHistoryService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.tenantAppealHistoryService.selectAppeal(id)
  }
}
