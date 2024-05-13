import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styles: ``,
})
export class MarkersPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef<HTMLDivElement>;

  public map?: Map;
  public currentZoom: number = 13;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.currentZoom,
      minZoom: -2,
      maxZoom: 18,
    });

    const marker = new Marker({
      // color: "red"
    })
      .setLngLat(this.currentLngLat)
      .addTo(this.map);
  }
}
