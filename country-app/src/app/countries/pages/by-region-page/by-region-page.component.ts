import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionComponent {
  private _countries: Country[] = [];
  private _isLoading: boolean = false;
  private _regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  private _selectedRegion?: Region;

  constructor(private countryService: CountryService) {}

  searchByRegion(value: Region) {
    this._selectedRegion = value;
    this._isLoading = true;
    this.countryService.searchRegion(value).subscribe((response) => {
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
  get regions(): Region[] {
    return [...this._regions];
  }

  get selectedRegion(): Region | undefined {
    return this._selectedRegion;
  }
}
