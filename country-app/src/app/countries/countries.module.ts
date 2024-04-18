import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';
import { ByCountryPageComponent } from './pages/by-country-page/by-country-page.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';

@NgModule({
  declarations: [ByCapitalPageComponent, ByCountryPageComponent, ByRegionComponent, CountryPageComponent],
  imports: [CommonModule],
})
export class CountriesModule {}
