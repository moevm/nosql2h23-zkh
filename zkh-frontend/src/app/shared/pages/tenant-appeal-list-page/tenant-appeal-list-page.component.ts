import { Component, OnInit } from '@angular/core';
import { TenantAppealServiceService } from 'src/app/tenant/tenant-services/tenant-appeal-service.service';
import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tenant-appeal-list-page',
  templateUrl: './tenant-appeal-list-page.component.html',
  styleUrls: ['./tenant-appeal-list-page.component.css']
})
export class TenantAppealListPageComponent implements OnInit {
  constructor(
    public tenantAppealService: TenantAppealServiceService,
    private requestService: RequestService,
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    this.requestService.get_all_appeals().subscribe(
      response => {
        this.tenantAppealService.appeals = [...response]
        this.tenantAppealService.selected_appeal = this.tenantAppealService.appeals[0]
        if (!this.tenantAppealService.selected_appeal) this.tenantAppealService.selected_appeal = null
        this.refreshMarkers()
        this.tenantAppealService.refreshMarkers()
      }
    )
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
