import { Component } from '@angular/core';
import { Route } from '../../interfaces/shared.interfaces';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styles: ``,
})
export class SidebarComponent {
  private _routes: Route[] = [
    /*  {
      name: 'About Page',
      path: 'about',
    },
    {
      name: 'Contact Page',
      path: 'contact',
    }, */
    {
      name: 'Por capítal',
      path: 'countries/by-capital',
    },
    {
      name: 'Por país',
      path: 'countries/by-country',
    },
    {
      name: 'Por Region',
      path: 'countries/by-region',
    },
  ];

  get routes(): Route[] {
    return [...this._routes];
  }
}
