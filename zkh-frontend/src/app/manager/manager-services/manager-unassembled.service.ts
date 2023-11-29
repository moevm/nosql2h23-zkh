import { EventEmitter, Injectable } from '@angular/core';
import { GeoMarker, UnassembledAppeal } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ManagerUnassembledService {

  constructor() { }

  refresh_markers = new EventEmitter<[GeoMarker[], GeoMarker | null]>()

  markers: any;
  active_marker: any;

  selectUnassembledAppeal(id: number) {
    this.selected_unassembled_appeal = this.unassembled_appels.filter(
      a => a.id === id
    )[0]
    this.refreshMarkers()
  }

  refreshMarkers() {
    this.refresh_markers.next([this.getMarkers(), this.getActiveMarker()])
  }

  getMarkers(): GeoMarker[] {
    return this.unassembled_appels.filter(a => a.id !== this.selected_unassembled_appeal?.id).map(t => {
      return {
        id: t.id,
        title: t.title,
        geotag: t.geotag
      }
    })
  }

  getActiveMarker(): GeoMarker | null {
    if (!this.selected_unassembled_appeal) return null
    return {
      id: this.selected_unassembled_appeal?.id,
      title: this.selected_unassembled_appeal?.title,
      geotag: this.selected_unassembled_appeal?.geotag
    }
  }

  unassembled_appels: UnassembledAppeal[] = [
    
  ]

  selected_unassembled_appeal: UnassembledAppeal | null = this.unassembled_appels[0]
}
