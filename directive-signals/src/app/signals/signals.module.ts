import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';

@NgModule({
  declarations: [SignalLayoutComponent],
  imports: [CommonModule, SignalsRoutingModule],
})
export class SignalsModule {}
