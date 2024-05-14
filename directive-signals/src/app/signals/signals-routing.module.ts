import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalLayoutComponent } from './layout/signal-layout/signal-layout.component';

const routes: Routes = [
  {
    path: '',
    component: SignalLayoutComponent,
    // children: [
    //   {
    //     path: '',
    //   },
    // ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignalsRoutingModule {}
