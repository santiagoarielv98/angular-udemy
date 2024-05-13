import { Component } from '@angular/core';

interface MenuItem {
  path: string;
  name: string;
}
@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { path: 'fullscreen', name: 'FullScreen' },
    { path: 'zoom-range', name: 'Zoom Range' },
    { path: 'markers', name: 'Markers' },
    { path: 'properties', name: 'Properties' },
  ];
}
