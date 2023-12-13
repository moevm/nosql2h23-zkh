import { Component, OnInit } from '@angular/core';
import { WorkerTaskService } from '../worker-services/worker-task.service';

@Component({
  selector: 'app-worker-task-info',
  templateUrl: './worker-task-info.component.html',
  styleUrls: ['./worker-task-info.component.css']
})
export class WorkerTaskInfoComponent implements OnInit {
  constructor(
    public workerTaskService: WorkerTaskService
  ) {

  }

  map: boolean = false;
  

  ngOnInit(): void {
    this.workerTaskService.selected_task = this.workerTaskService.tasks[0]
    this.refreshMarkers()
    this.workerTaskService.refreshMarkers()
  }

  refreshMarkers() {
    this.workerTaskService.markers = this.workerTaskService.getMarkers()
    this.workerTaskService.active_marker = this.workerTaskService.getActiveMarker()
  }

  onMarkerClick(id: number) {
    this.workerTaskService.selectTask(id)
  }
}
