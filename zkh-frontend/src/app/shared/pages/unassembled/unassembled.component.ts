import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { ManagerUnassembledService } from 'src/app/manager/manager-services/manager-unassembled.service';

@Component({
  selector: 'app-unassembled',
  templateUrl: './unassembled.component.html',
  styleUrls: ['./unassembled.component.css']
})
export class UnassembledComponent implements OnInit {
  constructor(
    private requestService: RequestService,
    private managerUnassembledService: ManagerUnassembledService
  ) {

  }

  ngOnInit(): void {
    this.requestService.get_unassembled().subscribe(
      response => {
        this.managerUnassembledService.unassembled_appels = [...response]
        this.managerUnassembledService.selected_unassembled_appeal = 
        this.managerUnassembledService.unassembled_appels[0]
        this.managerUnassembledService.markers = this.managerUnassembledService.getMarkers()
        this.managerUnassembledService.active_marker = this.managerUnassembledService.getActiveMarker()
        this.managerUnassembledService.refreshMarkers()
      }
    )
  }
}
