import { Component, OnInit } from '@angular/core';
import { TenantAppealHistoryService } from 'src/app/tenant/tenant-services/tenant-appeal-history.service';
import { RequestService } from '../../services/request.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-tenant-appeal-history-page',
  templateUrl: './tenant-appeal-history-page.component.html',
  styleUrls: ['./tenant-appeal-history-page.component.css']
})
export class TenantAppealHistoryPageComponent implements OnInit {
  constructor(
    public tenantAppealHistoryService: TenantAppealHistoryService,
    private requestService: RequestService,
    private authService: AuthService
  ) {
    
  }

  ngOnInit(): void {
    this.requestService.get_appeal(this.authService.role, this.authService.id).subscribe(
      response => {
        this.tenantAppealHistoryService.appeals = [...response]
        this.tenantAppealHistoryService.selected_appeal = this.tenantAppealHistoryService.appeals[0]
        if (!this.tenantAppealHistoryService.selected_appeal) this.tenantAppealHistoryService.selected_appeal = null
        this.refreshMarkers()
        this.tenantAppealHistoryService.refreshMarkers()
      }
    )
  }

  refreshMarkers() {
    this.tenantAppealHistoryService.markers = this.tenantAppealHistoryService.getMarkers()
    this.tenantAppealHistoryService.active_marker = this.tenantAppealHistoryService.getActiveMarker()
  }
}
