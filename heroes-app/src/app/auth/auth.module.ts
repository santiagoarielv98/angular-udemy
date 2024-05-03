import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { AuthRoutingModule } from './auth-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent, LayoutComponent],
  imports: [AuthRoutingModule, MaterialModule],
})
export class AuthModule {}
