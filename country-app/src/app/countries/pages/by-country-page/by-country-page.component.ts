import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``,
})
export class ByCountryPageComponent implements OnInit {
  private _countries: Country[] = [];
  private _initialValue: string = '';
  private _isLoading: boolean = false;

  constructor(private countryService: CountryService) {}
  ngOnInit(): void {
    this._countries = this.countryService.cacheStore.byCountries.countries;
    this._initialValue = this.countryService.cacheStore.byCountries.search;
  }
  searchByName(value: string) {
    this._isLoading = true;
    this.countryService.searchName(value).subscribe((response) => {
      this._countries = response;
      this._isLoading = false;
    });
  }

  get countries(): Country[] {
    return [...this._countries];
  }

  get isLoading(): boolean {
    return this._isLoading;
  }

  get initialValue(): string {
    return this._initialValue;
  }
}
