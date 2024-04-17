import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-images/lazy-images.component';

@NgModule({
  declarations: [SidebarComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebarComponent, LazyImageComponent],
})
export class SharedModule {}
