import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [LoadingSpinnerComponent, SearchBoxComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [LoadingSpinnerComponent, SearchBoxComponent, SidebarComponent],
})
export class SharedModule {}
