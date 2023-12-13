import { EventEmitter, Injectable } from '@angular/core';
import { Status } from 'src/app/shared/types/enumerations';
import { GeoMarker, Appeal } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ManagerAppealService {

  constructor() { }

  refresh_markers = new EventEmitter<[GeoMarker[], GeoMarker | null]>()

  markers: any;
  active_marker: any;

  selectAppeal(id: number) {
    this.selected_appeal = this.appeals.filter(
      a => a.id === id
    )[0]
    this.refreshMarkers()
  }

  refreshMarkers() {
    this.refresh_markers.next([this.getMarkers(), this.getActiveMarker()])
  }

  getMarkers(): GeoMarker[] {
    return this.appeals.filter(a => a.id !== this.selected_appeal?.id).map(t => {
      return {
        id: t.id,
        title: t.title,
        geotag: t.geotag
      }
    })
  }

  getActiveMarker(): GeoMarker | null {
    if (!this.selected_appeal) return null
    return {
      id: this.selected_appeal?.id,
      title: this.selected_appeal?.title,
      geotag: this.selected_appeal?.geotag
    }
  }

  appeals: Appeal[] = [
    
  ]

  selected_appeal: Appeal | null = this.appeals[0]
}
