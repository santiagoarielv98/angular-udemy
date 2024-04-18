import { Component } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent {
  private _countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  searchByName(term: string) {
    this.countryService.searchName(term).subscribe((response) => {
      this._countries = response;
    });
  }

  get countries(): Country[] {
    return [...this._countries];
  }
}
