import { Component, OnInit } from '@angular/core';
import { ManagerAppealService } from '../manager-services/manager-appeal.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-manager-appeal-list',
  templateUrl: './manager-appeal-list.component.html',
  styleUrls: ['./manager-appeal-list.component.css']
})
export class ManagerAppealListComponent implements OnInit {
  constructor(
    public managerAppealService: ManagerAppealService,
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
    this.managerAppealService.selectAppeal(id)
  }

  ngOnInit(): void {
    this.requestService.get_appeal(this.authService.role, this.authService.id).subscribe(
      response => {
        this.managerAppealService.appeals = [...response]
        this.managerAppealService.selected_appeal = this.managerAppealService.appeals[0]
        this.managerAppealService.markers = this.managerAppealService.getMarkers()
        this.managerAppealService.active_marker = this.managerAppealService.getActiveMarker()
        this.managerAppealService.refreshMarkers()
      }
    )
  }
}
