import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PriceComponent } from './components/price/price.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';

@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [PriceComponent, ProductPageComponent],
})
export class ProductsModule {}
