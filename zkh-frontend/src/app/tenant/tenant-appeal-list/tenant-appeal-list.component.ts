import { Component, OnInit } from '@angular/core';
import { TenantAppealServiceService } from '../tenant-services/tenant-appeal-service.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-tenant-appeal-list',
  templateUrl: './tenant-appeal-list.component.html',
  styleUrls: ['./tenant-appeal-list.component.css']
})
export class TenantAppealListComponent {
  constructor(
    public tenantAppealService: TenantAppealServiceService,
    private requestService: RequestService,
    private authService: AuthService
  ) {

  }

  openFilters(event: Event) {
    event.stopPropagation()
    this.filtersOpened = !this.filtersOpened
  }


  filtersOpened: boolean = false;

  selectAppeal(id: number) {
    this.tenantAppealService.selectAppeal(id)
  }
}
