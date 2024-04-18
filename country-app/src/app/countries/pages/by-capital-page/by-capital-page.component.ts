import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent implements OnInit {
  private _countries: Country[] = [];
  private _initialValue: string = '';

  private _isLoading: boolean = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this._countries = this.countryService.cacheStore.byCapital.countries;
    this._initialValue = this.countryService.cacheStore.byCapital.search;
  }

  searchByCapital(value: string) {
    this._isLoading = true;
    this.countryService.searchCapital(value).subscribe((response) => {
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
