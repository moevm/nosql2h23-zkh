import { Component, OnInit } from '@angular/core';
import { ManagerAppealService } from '../manager-services/manager-appeal.service';
import { Human, Message } from 'src/app/shared/types/interfaces';

@Component({
  selector: 'app-manager-my-appeal-info',
  templateUrl: './manager-my-appeal-info.component.html',
  styleUrls: ['./manager-my-appeal-info.component.css']
})
export class ManagerMyAppealInfoComponent implements OnInit {
  constructor(
    public managerAppealService: ManagerAppealService
  ) {

  }

  map: boolean = false;

  workers: Human[] = [
    {
      id: 1,
      name: "aaaa aaaa aaa"
    }
  ]
  

  ngOnInit(): void {
    this.managerAppealService.selected_appeal = this.managerAppealService.appeals[0]
    this.refreshMarkers()
    this.managerAppealService.refreshMarkers()
  }

  refreshMarkers() {
    this.managerAppealService.markers = this.managerAppealService.getMarkers()
    this.managerAppealService.active_marker = this.managerAppealService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.managerAppealService.selectAppeal(id)
  }

  onMessage(msg: Message) {
    this.managerAppealService.appeals.forEach(
      a => {
        if (a.id === this.managerAppealService.selected_appeal?.id) {
          a.messages.push(msg)
          this.managerAppealService.selected_appeal = a
        }
      }
    )
  }

  changeStatus(status: string) {
    console.log(status)
  }

  changeWorker(worker: string) {
    console.log(worker)
  }
}
