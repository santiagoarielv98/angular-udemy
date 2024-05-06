import { Component } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { User } from '../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

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
  constructor(private authService: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
