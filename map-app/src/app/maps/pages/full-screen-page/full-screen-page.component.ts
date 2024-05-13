import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './full-screen-page.component.html',
  styles: ``,
})
export class FullScreenPageComponent implements AfterViewInit {
  @ViewChild('map')
  public divMap?: ElementRef<HTMLDivElement>;

  ngAfterViewInit(): void {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';
    const _map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }
}
