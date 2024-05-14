import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';
import { SideMenuComponent } from '../../components/side-menu/side-menu.component';

@Component({
  standalone: true,
  templateUrl: './alone-page.component.html',
  imports: [CounterAloneComponent, SideMenuComponent],
})
export class AlonePageComponent {}
