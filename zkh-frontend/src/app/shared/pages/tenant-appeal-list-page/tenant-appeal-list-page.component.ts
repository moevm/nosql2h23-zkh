import { Component } from '@angular/core';
import { TenantAppealServiceService } from 'src/app/tenant/tenant-services/tenant-appeal-service.service';

@Component({
  selector: 'app-tenant-appeal-list-page',
  templateUrl: './tenant-appeal-list-page.component.html',
  styleUrls: ['./tenant-appeal-list-page.component.css']
})
export class TenantAppealListPageComponent {
  constructor(
    public tenantAppealService: TenantAppealServiceService
  ) {

  }

  ngOnInit(): void {
    this.tenantAppealService.selected_appeal = this.tenantAppealService.appeals[0]
    this.refreshMarkers()
    this.tenantAppealService.refreshMarkers()
  }

  refreshMarkers() {
    this.tenantAppealService.markers = this.tenantAppealService.getMarkers()
    this.tenantAppealService.active_marker = this.tenantAppealService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.tenantAppealService.selectAppeal(id)
  }

  filter(event: Event) {
    this.tenantAppealService.only_mine = (event.target as any).checked
    this.tenantAppealService.selected_appeal = this.tenantAppealService.appeals[0]
    this.refreshMarkers()
    this.tenantAppealService.refreshMarkers()
  }
}
