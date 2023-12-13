import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import * as L from "leaflet"
import { GeoMarker, Geotag } from '../../types/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  private map: L.Map;
  private centroid: L.LatLngExpression = [59.9662, 30.3116];

  @Input() markers: GeoMarker[] = [];
  @Input() active_marker: GeoMarker | null = null;
  @Input() refresh_markers: EventEmitter<[GeoMarker[], GeoMarker | null]>;

  @Output() onMarkerClick = new EventEmitter<number>()

  added_markers: L.Marker<any>[] = []

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 14
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 14
    });

    this.addMarkers(this.markers, this.active_marker)

    tiles.addTo(this.map);
  
  }

  constructor() {
    
  }

  addMarkers(markers: GeoMarker[], active_marker: GeoMarker | null) {
    if (!markers) return
    markers.forEach(marker => {
      let m = L.marker([marker.geotag.latitude, marker.geotag.longitude], {bubblingMouseEvents: true})
      m.setIcon(L.icon({iconUrl: "assets/marker-icon.png", iconSize: [25, 41]}))
      this.added_markers.push(m)
      m.on("click", () => {this.onMarkerClick.emit(marker.id)})
      m.addTo(this.map)
    })

    if (active_marker) {
      let m = L.marker(
        [active_marker.geotag.latitude, active_marker.geotag.longitude],
        {bubblingMouseEvents: true}
      )
      m.setIcon(L.icon({iconUrl: "assets/active-marker-icon.png", iconSize: [25, 41]}))
      this.added_markers.push(m)
      m.on("click", () => {this.onMarkerClick.emit(active_marker.id)})
      m.addTo(this.map).bindPopup(`${active_marker.title}`).openPopup()
    }
  }

  ngOnInit(): void {
    this.initMap();
    this.refresh_markers.subscribe(data => {
      this.added_markers.forEach(
        m => this.map.removeLayer(m)
      )
      this.added_markers = []
      this.addMarkers(data[0], data[1])
    })
  }

}
