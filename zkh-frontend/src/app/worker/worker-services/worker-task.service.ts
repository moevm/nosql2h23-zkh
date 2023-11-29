import { EventEmitter, Injectable } from '@angular/core';
import { Status } from 'src/app/shared/types/enumerations';
import { GeoMarker, WorkerTask } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class WorkerTaskService {

  constructor() { }

  refresh_markers = new EventEmitter<[GeoMarker[], GeoMarker | null]>()

  markers: any;
  active_marker: any;

  selectTask(id: number) {
    this.selected_task = this.tasks.filter(
      t => t.id === id
    )[0]
    this.refreshMarkers()
  }

  refreshMarkers() {
    this.refresh_markers.next([this.getMarkers(), this.getActiveMarker()])
  }

  getMarkers(): GeoMarker[] {
    return this.tasks.filter(t => t.id !== this.selected_task?.id).map(t => {
      return {
        id: t.id,
        title: t.title,
        geotag: t.geotag
      }
    })
  }

  getActiveMarker(): GeoMarker | null {
    if (!this.selected_task) return null
    return {
      id: this.selected_task?.id,
      title: this.selected_task?.title,
      geotag: this.selected_task?.geotag
    }
  }

  tasks: WorkerTask[] = [
    
  ]

  selected_task: WorkerTask | null = this.tasks[0]

}
