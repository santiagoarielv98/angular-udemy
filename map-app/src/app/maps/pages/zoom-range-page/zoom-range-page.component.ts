import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styles: ``,
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
  @ViewChild('map')
  public divMap?: ElementRef<HTMLDivElement>;

  public currentZoom: number = 10;
  public currentLngLat: LngLat = new LngLat(-74.5, 40);
  public map?: Map;

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

    this.mapListeners();
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }
  mapListeners() {
    if (!this.map || this.map === undefined) throw 'Mapa no inicializado';

    this.map.on('zoom', (ev) => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      this.currentZoom = this.map!.getZoom();
    });

    this.map.on('move', (ev) => {
      this.currentLngLat = this.map!.getCenter();
    });
  }

  zoomIn() {
    this.map?.zoomIn();
  }
  zoomOut() {
    this.map?.zoomOut();
  }

  zoomChanged(value: string) {
    this.currentZoom = Number(value);
    this.map?.zoomTo(this.currentZoom);
  }
}
