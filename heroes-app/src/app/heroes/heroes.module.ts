import { NgModule } from '@angular/core';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    HeroPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    LayoutComponent,
  ],
  imports: [HeroesRoutingModule],
})
export class HeroesModule {}
