import { EventEmitter, Injectable } from '@angular/core';
import { Status } from 'src/app/shared/types/enumerations';
import { Appeal, GeoMarker } from 'src/app/shared/types/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TenantAppealHistoryService {
  constructor() { }

  refresh_markers = new EventEmitter<[GeoMarker[], GeoMarker | null]>()

  markers: any;
  active_marker: any;

  create_appeal: boolean = false

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
    {
      id: 1,
      title: "afwdfewf",
      date: new Date(),
      description: "hvuierhvreh",
      status: Status.NEW,
      manager: {
        id: 1,
        name: "Иванов Иван Иванович"
      },
      address: "ff3f3",
      geotag: {
        longitude: 23.929392,
        latitude: 34.124123
      },
      feedback: "",
      tenant: {
        id: 2,
        name: "Петров Петр Петрович"
      },
      messages: [
        {
          message: "aaaaaaa aa a  aa a",
          date: new Date(),
          owner: {
            id: 2,
            name: "Петров Петр Петрович" 
          }
        },
        {
          message: "bb bb b bb bb bb b",
          date: new Date(),
          owner: {
            id: 1,
            name: "Иванов Иван Иванович" 
          }
        },
        {
          message: "c c cc ccc ccc c",
          date: new Date(),
          owner: {
            id: 2,
            name: "Петров Петр Петрович" 
          }
        }
      ],
      workers: []
    }
  ]

  selected_appeal: Appeal | null = this.appeals[0]
}
