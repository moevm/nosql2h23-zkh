import { Component } from '@angular/core';
import { TenantAppealHistoryService } from 'src/app/tenant/tenant-services/tenant-appeal-history.service';

@Component({
  selector: 'app-tenant-appeal-history-page',
  templateUrl: './tenant-appeal-history-page.component.html',
  styleUrls: ['./tenant-appeal-history-page.component.css']
})
export class TenantAppealHistoryPageComponent {
  constructor(public tenantAppealHistoryService: TenantAppealHistoryService) {
    
  }
}
