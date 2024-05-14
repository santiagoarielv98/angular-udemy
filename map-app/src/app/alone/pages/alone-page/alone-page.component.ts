import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CounterAloneComponent } from '../../components/counter-alone/counter-alone.component';

@Component({
  standalone: true,
  imports: [CounterAloneComponent],
  templateUrl: './alone-page.component.html',
})
export class AlonePageComponent {}
