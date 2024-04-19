import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    InputTextModule,
    MenubarModule,
    PanelModule,
  ],
})
export class PrimeNgModule {}
