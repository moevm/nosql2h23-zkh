import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TenantAppealHistoryService } from '../tenant-services/tenant-appeal-history.service';

@Component({
  selector: 'app-tenant-appeal-history',
  templateUrl: './tenant-appeal-history.component.html',
  styleUrls: ['./tenant-appeal-history.component.css']
})
export class TenantAppealHistoryComponent implements OnInit {
  constructor(
    public tenantAppealHistoryService: TenantAppealHistoryService,
    private requestService: RequestService,
    private authService: AuthService
  ) {

  }

  selectAppeal(id: number) {
    this.tenantAppealHistoryService.selectAppeal(id)
  }

  ngOnInit(): void {
    this.requestService.get_appeal(this.authService.role, this.authService.id).subscribe(
      response => {
        this.tenantAppealHistoryService.appeals = [...response]
        this.tenantAppealHistoryService.selected_appeal = this.tenantAppealHistoryService.appeals[0]
        this.tenantAppealHistoryService.markers = this.tenantAppealHistoryService.getMarkers()
        this.tenantAppealHistoryService.active_marker = this.tenantAppealHistoryService.getActiveMarker()
        this.tenantAppealHistoryService.refreshMarkers()
      }
    )
  }
}
