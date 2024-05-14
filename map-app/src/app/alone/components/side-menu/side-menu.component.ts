import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  path: string;
  name: string;
}
@Component({
  standalone: true,
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``,
  imports: [CommonModule, RouterModule],
})
export class SideMenuComponent {
  public menuItems: MenuItem[] = [
    { path: '/maps/fullscreen', name: 'FullScreen' },
    { path: '/maps/zoom-range', name: 'Zoom Range' },
    { path: '/maps/markers', name: 'Markers' },
    { path: '/maps/properties', name: 'Properties' },
    { path: '/alone', name: 'Alone Page' },
  ];
}
