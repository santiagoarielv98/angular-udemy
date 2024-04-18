import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-by-region',
  templateUrl: './by-region.component.html',
  styles: ``,
})
export class ByRegionComponent {
  private _countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByRegion(term: string) {
    this.countryService.searchRegion(term).subscribe((response) => {
      this._countries = response;
    });
  }

  get countries(): Country[] {
    return [...this._countries];
  }
}
