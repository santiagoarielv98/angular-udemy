import { Component } from '@angular/core';

@Component({
  selector: 'heroes-layout',
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent {
  public sidebarItems = [
    {
      label: 'Listado',
      icon: 'label',
      href: './list',
    },
    {
      label: 'Añadir',
      icon: 'add',
      href: './new-hero',
    },
    {
      label: 'Buscar',
      icon: 'search',
      href: './search',
    },
  ];
}
