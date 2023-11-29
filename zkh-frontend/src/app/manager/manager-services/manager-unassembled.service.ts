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
    {
      id: 1,
      title: "Ремонт фасада дома",
      date: new Date(2023, 10, 29),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate est labore, autem explicabo dolore repudiandae, vitae dolorem laborum vero mollitia debitis dolor! Magnam, repudiandae, autem dolores distinctio nobis magni facilis numquam perferendis ad assumenda consequuntur? Ea non debitis, quasi, officiis reiciendis repudiandae ut dignissimos quaerat dolores porro atque dolore? Et aperiam voluptatem, unde recusandae expedita praesentium repellendus quia deleniti enim provident delectus fugit porro.",
      address: "Аптекарская набережная 37, парадная 2",
      geotag: {
        latitude: 59.9682,
        longitude: 30.3101
      }
    },
    {
      id: 2,
      title: "Стрижка газона",
      date: new Date(2023, 10, 1),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate est labore, autem explicabo dolore repudiandae, vitae dolorem laborum vero mollitia debitis dolor! Magnam, repudiandae, autem dolores distinctio nobis magni facilis numquam perferendis ad assumenda consequuntur? Ea non debitis, quasi, officiis reiciendis repudiandae ut dignissimos quaerat dolores porro atque dolore? Et aperiam voluptatem, unde recusandae expedita praesentium repellendus quia deleniti enim provident delectus fugit porro.",
      address: "Аптекарская набережная 37, парадная 2",
      geotag: {
        latitude: 59.9662,
        longitude: 30.3116
      }
    },
    {
      id: 3,
      title: "Починка домофона",
      date: new Date(2023, 10, 8),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate est labore, autem explicabo dolore repudiandae, vitae dolorem laborum vero mollitia debitis dolor! Magnam, repudiandae, autem dolores distinctio nobis magni facilis numquam perferendis ad assumenda consequuntur? Ea non debitis, quasi, officiis reiciendis repudiandae ut dignissimos quaerat dolores porro atque dolore? Et aperiam voluptatem, unde recusandae expedita praesentium repellendus quia deleniti enim provident delectus fugit porro.",
      address: "Аптекарская набережная 37, парадная 2",
      geotag: {
        latitude: 59.9642,
        longitude: 30.3131
      }
    },
    {
      id: 4,
      title: "Устранение засора в канализации",
      date: new Date(2023, 10, 15),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate est labore, autem explicabo dolore repudiandae, vitae dolorem laborum vero mollitia debitis dolor! Magnam, repudiandae, autem dolores distinctio nobis magni facilis numquam perferendis ad assumenda consequuntur? Ea non debitis, quasi, officiis reiciendis repudiandae ut dignissimos quaerat dolores porro atque dolore? Et aperiam voluptatem, unde recusandae expedita praesentium repellendus quia deleniti enim provident delectus fugit porro.",
      address: "Аптекарская набережная 37, парадная 2",
      geotag: {
        latitude: 59.9622,
        longitude: 30.3146
      }
    },
    {
      id: 5,
      title: "Капитальный ремонт",
      date: new Date(2023, 10, 22),
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab cupiditate est labore, autem explicabo dolore repudiandae, vitae dolorem laborum vero mollitia debitis dolor! Magnam, repudiandae, autem dolores distinctio nobis magni facilis numquam perferendis ad assumenda consequuntur? Ea non debitis, quasi, officiis reiciendis repudiandae ut dignissimos quaerat dolores porro atque dolore? Et aperiam voluptatem, unde recusandae expedita praesentium repellendus quia deleniti enim provident delectus fugit porro.",
      address: "Аптекарская набережная 37, парадная 2",
      geotag: {
        latitude: 59.9602,
        longitude: 30.3151
      }
    }
  ]

  selected_unassembled_appeal: UnassembledAppeal | null = this.unassembled_appels[0]
}
