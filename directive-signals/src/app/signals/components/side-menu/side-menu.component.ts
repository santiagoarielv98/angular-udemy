import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  title: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', route: 'counter' },
    { title: 'Informacion', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]);
  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Informacion', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];
}
