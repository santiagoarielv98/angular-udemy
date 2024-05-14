import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';

@NgModule({
  declarations: [SignalLayoutComponent],
  imports: [CommonModule, SignalsRoutingModule, SideMenuComponent],
})
export class SignalsModule {}
