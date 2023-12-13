import { EventEmitter, Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Status } from 'src/app/shared/types/enumerations';
import { Appeal, GeoMarker } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TenantAppealServiceService {
  constructor(
    private authService: AuthService
  ) { }

  refresh_markers = new EventEmitter<[GeoMarker[], GeoMarker | null]>()

  only_mine: boolean = false

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
    if (this.only_mine) {
      return this.appeals.filter(
        a => (a.tenant.id === this.authService.id && a.id !== this.selected_appeal?.id)
      )
      .map(t => {
        return {
          id: t.id,
          title: t.title,
          geotag: t.geotag
        }
      })
    }
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
    if (this.only_mine && this.selected_appeal.tenant.id !== this.authService.id) return null
    return {
      id: this.selected_appeal?.id,
      title: this.selected_appeal?.title,
      geotag: this.selected_appeal?.geotag
    }
  }

  appeals: Appeal[] = [

  ]

  selected_appeal: Appeal | null = null
}
