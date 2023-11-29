import { Component, OnInit } from '@angular/core';
import { WorkerTaskService } from '../worker-services/worker-task.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-worker-task-list',
  templateUrl: './worker-task-list.component.html',
  styleUrls: ['./worker-task-list.component.css']
})
export class WorkerTaskListComponent implements OnInit {
  
  constructor(
    public workerTaskService: WorkerTaskService,
    private requestService: RequestService,
    private authService: AuthService
  ) {

  }

  selectTask(id: number) {
    this.workerTaskService.selectTask(id)
  }
  
  ngOnInit(): void {
    this.requestService.get_appeal(this.authService.role, this.authService.id).subscribe(
      response => {
        this.workerTaskService.tasks = [...response]
        this.workerTaskService.selected_task = this.workerTaskService.tasks[0]
        this.workerTaskService.markers = this.workerTaskService.getMarkers()
        this.workerTaskService.active_marker = this.workerTaskService.getActiveMarker()
        this.workerTaskService.refreshMarkers()
      }
    )
  }
}
