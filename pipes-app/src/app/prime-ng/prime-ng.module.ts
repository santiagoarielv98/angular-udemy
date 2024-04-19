import { NgModule } from '@angular/core';

import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  exports: [InputTextModule, MenubarModule],
})
export class PrimeNgModule {}
