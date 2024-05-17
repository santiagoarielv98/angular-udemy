import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
})
export class ControlFlowComponent {
  public showContext = signal(false);
  public grade = signal<Grade>('A');

  public toggleContext() {
    this.showContext.update((value) => !value);
  }
}
