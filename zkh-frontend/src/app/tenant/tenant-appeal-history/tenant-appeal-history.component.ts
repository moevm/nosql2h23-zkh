import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { TenantAppealHistoryService } from '../tenant-services/tenant-appeal-history.service';

@Component({
  selector: 'app-tenant-appeal-history',
  templateUrl: './tenant-appeal-history.component.html',
  styleUrls: ['./tenant-appeal-history.component.css']
})
export class TenantAppealHistoryComponent {
  constructor(
    public tenantAppealHistoryService: TenantAppealHistoryService,
    private requestService: RequestService,
    private authService: AuthService
  ) {

  }

  selectAppeal(id: number) {
    this.tenantAppealHistoryService.selectAppeal(id)
  }
}
