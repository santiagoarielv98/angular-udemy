import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';
import { SignalsRoutingModule } from './signals-routing.module';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

@NgModule({
  declarations: [
    SignalLayoutComponent,
    UserInfoPageComponent,
    CounterPageComponent,
    PropertiesPageComponent,
  ],
  imports: [CommonModule, SignalsRoutingModule, SideMenuComponent],
})
export class SignalsModule {}
