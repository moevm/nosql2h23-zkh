import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/shared/services/request.service';
import { Activity } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-tenant-schedule-modal',
  templateUrl: './tenant-schedule-modal.component.html',
  styleUrls: ['./tenant-schedule-modal.component.css']
})
export class TenantScheduleModalComponent implements OnInit {

  constructor(
    private requestService: RequestService
  ) {

  }

  ativities: Activity[] = [
    
  ]

  ngOnInit(): void {
    this.requestService.get_all_activities().subscribe(
      response => {
        this.ativities = [...response]
      }
    )
  }
}
