import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { CountryService } from '../../services/country.service';
import { Region } from '../../interfaces/region.types';

@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionComponent implements OnInit {
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

  ngOnInit(): void {
    this._countries = this.countryService.cacheStore.byRegion.countries;
    this._selectedRegion =
      this.countryService.cacheStore.byRegion.search || undefined;
  }

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
