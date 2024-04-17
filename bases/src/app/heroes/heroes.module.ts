import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroComponent } from './components/hero/hero.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeroComponent, ListComponent],
  exports: [HeroComponent, ListComponent]
})
export class HeroesModule {}
